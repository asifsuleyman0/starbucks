import { useCart } from '../Context/CartContext.jsx';
import { Link } from 'react-router-dom';
import { FiMinus, FiPlus, FiTrash2, FiArrowLeft, FiGift, FiMail, FiShoppingCart} from 'react-icons/fi';


const Cart = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
    }
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => {
      return total + (item.selectedSize.price * item.quantity);
    }, 0).toFixed(2);
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const isGiftCard = (item) => {
    return item.product.type === 'gift-card';
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl ml-18 mb-5"><FiShoppingCart/></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <Link to="/menu" className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
            <FiArrowLeft className="mr-2" />Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/menu" className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <FiArrowLeft className="text-xl" />
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold">Your Order</h1>
          </div>
          <span className="text-sm text-gray-600">
            {state.totalItems} item{state.totalItems !== 1 ? 's' : ''}
          </span>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <div className="space-y-4 mb-8">
          {state.items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="relative">
                    <div className="size-20 sm:size-24 md:size-28 overflow-hidden flex-shrink-0 bg-gray-100">
                      <img src={item.product.imageURL} alt={item.product.name} className="size-full"/>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-lg mb-1">{item.product.name}</h3>
                  {isGiftCard(item) ? (
                    <div className="text-gray-600 text-sm mb-2 space-y-1">
                      <p className="flex items-center justify-center sm:justify-start">
                        <FiGift className="w-4 h-4 mr-1" />
                        {item.selectedSize.sizeCode}
                      </p>
                      {item.selectedSize.recipient && (
                        <p className="flex items-center justify-center sm:justify-start">
                          <FiMail className="w-4 h-4 mr-1" />
                          {item.selectedSize.recipient.name} ({item.selectedSize.recipient.email})
                        </p>
                      )}
                      {item.selectedSize.message && (
                        <p className="text-xs italic bg-gray-50 p-2 rounded">
                          Message: "{item.selectedSize.message}"
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-600 text-sm mb-2">
                      Size: {item.selectedSize.sizeCode} ({item.selectedSize.fl} fl oz)
                    </p>
                  )}
                  
                  <p className="font-bold text-green-600 text-lg">
                    ${item.selectedSize.price.toFixed(2)} each
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  {!isGiftCard(item) && (
                    <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-1">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors">
                        <FiMinus className="text-sm" />
                      </button>
                      <span className="font-bold text-lg min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors">
                        <FiPlus className="text-sm" />
                      </button>
                    </div>
                  )}
                  
                  {isGiftCard(item) && (
                    <div className="bg-yellow-50 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-yellow-700">Gift Card</span>
                    </div>
                  )}
                  
                  <button onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors">
                    <FiTrash2 className="text-sm" />
                  </button>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Subtotal:</span>
                  <span className="font-bold text-lg text-green-600">
                    ${(item.selectedSize.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-8">
          <h3 className="font-bold text-lg mb-4">Order Summary</h3>
          <div className="space-y-1 mb-4 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Regular items: {state.items.filter(item => !isGiftCard(item)).length}</span>
              <span>Gift cards: {state.items.filter(item => isGiftCard(item)).length}</span>
            </div>
          </div>          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${getTotalPrice()}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span className="text-green-600">
                  ${(parseFloat(getTotalPrice()) + parseFloat(getTotalPrice()) * 0.08).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button onClick={clearCart}
            className="flex-1 py-3 px-6 border border-red-500 text-red-500 font-bold rounded-full hover:bg-red-50 transition-colors">
            Clear Cart
          </button>
          <button className="flex-1 py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;