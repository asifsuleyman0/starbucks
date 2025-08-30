import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'starbucks_cart';

const saveToLocalStorage = (cartState) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
  }
  return {
    items: [],
    totalItems: 0
  };
};

const cartReducer = (state, action) => {
  let newState;
  
  switch (action.type) {
    case 'LOAD_FROM_STORAGE':
      return action.payload;
      
    case 'ADD_TO_CART': {
      const { product, selectedSize } = action.payload;
      
      if (product.type === 'gift-card') {
        const newItems = selectedSize.recipients.map((recipient, index) => ({
          product: {
            ...product,
            name: `${product.name} for ${recipient.name}`
          },
          selectedSize: {
            ...selectedSize,
            recipient: recipient,
            sizeCode: `Gift Card (${selectedSize.amount})`
          },
          quantity: 1,
          id: Date.now() + index
        }));
        
        newState = {
          ...state,
          items: [...state.items, ...newItems],
          totalItems: state.totalItems + newItems.length
        };
      } else {
        const existingItemIndex = state.items.findIndex(
          item => item.product.productNumber === product.productNumber && 
                  item.selectedSize.sizeCode === selectedSize.sizeCode &&
                  item.product.type !== 'gift-card'
        );

        if (existingItemIndex >= 0) {
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += 1;
          newState = {
            ...state,
            items: updatedItems,
            totalItems: state.totalItems + 1
          };
        } else {
          newState = {
            ...state,
            items: [...state.items, { product, selectedSize, quantity: 1, id: Date.now() }],
            totalItems: state.totalItems + 1
          };
        }
      }
      break;
    }
    
    case 'REMOVE_FROM_CART': {
      const removedItem = state.items.find(item => item.id === action.payload);
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      newState = {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems - (removedItem?.quantity || 0)
      };
      break;
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      const quantityDiff = quantity - (item?.quantity || 0);
      
      const updatedItems = state.items.map(item => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      });
      
      newState = {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + quantityDiff
      };
      break;
    }
    
    case 'CLEAR_CART':
      newState = {
        items: [],
        totalItems: 0
      };
      break;
      
    default:
      return state;
  }
  
  if (action.type !== 'LOAD_FROM_STORAGE') {
    saveToLocalStorage(newState);
  }
  
  return newState;
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalItems: 0
  });

  useEffect(() => {
    const savedCart = loadFromLocalStorage();
    if (savedCart.items.length > 0) {
      dispatch({ type: 'LOAD_FROM_STORAGE', payload: savedCart });
    }
  }, []);

  const enhancedDispatch = (action) => {
    dispatch(action);
  };

  const clearStorage = () => {
    try {
      localStorage.removeItem(CART_STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing cart from localStorage:', error);
    }
  };

  const contextValue = {
    state,
    dispatch: enhancedDispatch,
    clearStorage
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const cartStorageHelpers = {
  save: saveToLocalStorage,
  load: loadFromLocalStorage,
  clear: () => {
    try {
      localStorage.removeItem(CART_STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing cart storage:', error);
    }
  }
};