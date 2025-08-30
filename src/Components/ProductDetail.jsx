import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../Provider/data.js";
import { CiCoffeeCup } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { SlMagicWand } from "react-icons/sl";
import LoadingDetails from "../Loading/LoadingDetails.jsx";
import FooterMenu from "./FooterMenu.jsx";
import { useCart } from "../Context/CartContext.jsx";

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(2);
  const [isAdding, setIsAdding] = useState(false);
  const { dispatch } = useCart();

  const sizes = [
    { sizeCode: "Tall", fl: 8, class: "text-lg sm:text-xl md:text-2xl", price: 4.50 },
    { sizeCode: "Grande", fl: 12, class: "text-xl sm:text-2xl md:text-3xl", price: 5.25 },
    { sizeCode: "Venti", fl: 16, class: "text-2xl sm:text-3xl md:text-4xl", price: 5.95 },
    { sizeCode: "Trenta", fl: 20, class: "text-3xl sm:text-4xl md:text-5xl", price: 6.45 },
  ];

  useEffect(() => {
    API.getData().then((data) => {
      const findProduct = (nodes) => {
        for (let node of nodes) {
          if (node.products?.length) {
            const found = node.products.find((p) => String(p.productNumber) === id);
            if (found) return found;
          }
          if (node.children?.length) {
            const found = findProduct(node.children);
            if (found) return found;
          }
        }
        return null;
      };
      const result = findProduct(data);
      setProduct(result);
      setLoading(false);
    });
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    
    setIsAdding(true);
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product,
        selectedSize: sizes[selectedSize]
      }
    });

    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  if (loading) return <LoadingDetails/>;
  if (!product) return <p className="m-10 text-center">Product not found</p>;

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-3 sm:py-4 text-xs sm:text-sm text-gray-600">
        Menu / Hot Coffee / {product.name}
      </div>
      <div className="darkgreen text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
            <div className="relative z-10 order-2 md:order-1 flex-shrink-0">
              <img 
                src={product.imageURL} 
                alt={product.name} 
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-contain mx-auto"
              />
            </div>
            <div className="flex-1 md:ml-6 lg:ml-8 xl:ml-12 text-center md:text-left order-1 md:order-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-sm sm:text-base md:text-lg opacity-90 mb-2">5 calories ⓘ</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300">
                ${sizes[selectedSize].price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
            <div className="flex-1 lg:max-w-2xl">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-8 border-b-4 border-green-900 pb-2 sm:pb-3 md:pb-4 max-w-xs sm:max-w-sm">
                Size options
              </h2>
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 justify-center sm:justify-start">
                {sizes.map((size, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      onClick={() => setSelectedSize(index)} 
                      className={`flex items-center justify-center border-2 rounded-full cursor-pointer transition-all duration-200 hover:shadow-lg w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${
                        selectedSize === index 
                          ? "border-green-900 bg-green-50 shadow-md" 
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <CiCoffeeCup className={`${size.class} text-gray-400`} />
                    </div>
                    <div className="mt-1 sm:mt-2 text-center">
                      <h4 className="font-bold text-xs sm:text-sm md:text-base">{size.sizeCode}</h4>
                      <p className="font-semibold text-gray-800 text-xs sm:text-sm">{size.fl} fl oz</p>
                      <p className="font-bold text-green-900 text-xs sm:text-sm">${size.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6 sm:mb-8">
                <button className="flex items-center transition-colors text-gray-500 text-sm sm:text-base hover:text-gray-700">
                  <span className="mr-2"><IoLocationOutline /></span>
                  <p>Select a store to view availability</p>
                </button>
              </div>
            </div>

            <div className="lg:flex-shrink-0 lg:w-auto">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 lg:gap-3 justify-center lg:justify-start">
                <button onClick={handleAddToCart} disabled={isAdding}
                  className={`flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-5 xl:px-6 py-2 sm:py-3 lg:py-2 xl:py-3 rounded-full border-2 font-bold text-white text-sm md:text-base lg:text-sm xl:text-base w-full sm:w-auto lg:w-40 xl:w-44 transition-all duration-300 ${
                    isAdding 
                      ? 'bg-green-700 border-green-700 scale-95' 
                      : 'bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-700'
                  }`}
                >
                  {isAdding ? '✓ Added!' : 'Add to Order'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterMenu/>
    </div>
  );
};

export default ProductDetail;