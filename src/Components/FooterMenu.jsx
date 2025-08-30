import { BsBasket3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";

const FooterMenu = () => {
  const { state } = useCart();

  return (
    <div className="fixed bottom-0 left-0 w-full darkgreen text-white p-4 sm:p-6 md:p-8">
      <div className="flex justify-end">
        <Link to="/cart" className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-700 hover:bg-green-800 transition-colors shadow-lg">
          <BsBasket3 className="text-xl sm:text-2xl md:text-3xl" />
          {state.totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs sm:text-sm font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
              {state.totalItems}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default FooterMenu;