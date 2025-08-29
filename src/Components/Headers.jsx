import { IoLocationSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/menu", label: "Menu" },
    { href: "/rewards", label: "Rewards" },
    { href: "/gift", label: "Gift Cards" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-xl border-b border-gray-200 sticky z-50">
        <div className="w-10/12 mx-auto px-4 sm:px-6 my-4">
            <div className="flex items-center justify-between h-16 w-full">
                <div className="flex items-center flex-1">
                    <div className="flex items-center mr-8 lg:mr-12">
                        <Link to="/" ><img src="logo.png" alt="Starbucks" className="size-13" /></Link>
                    </div>
                    <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        {navigationItems.map((item) => (
                        <a key={item.label} href={item.href} className="text-black hover:text-green-600 font-bold uppercase tracking-wider text-sm transition-colors duration-200">
                            {item.label}
                        </a>))}
                    </nav>
                </div>
                <div className="flex items-center space-x-2 lg:space-x-4">
                    <button className="hidden lg:flex items-center space-x-2 text-black hover:text-green-600 font-semibold text-sm transition-colors duration-200 px-2 lg:px-3 py-2 rounded-full hover:bg-gray-50">
                        <IoLocationSharp className="text-lg" />
                        <span className="hidden lg:inline whitespace-nowrap">Find a store</span>
                    </button>
                    <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                        <button className="text-black hover:text-green-600 font-semibold text-sm border border-black hover:border-green-600 px-4 xl:px-6 py-2 rounded-full transition-all duration-200 whitespace-nowrap">
                            Sign in
                        </button>
                        <button className="bg-black hover:bg-gray-800 text-white font-semibold text-sm px-4 xl:px-6 py-2 rounded-full transition-all duration-200 whitespace-nowrap">
                            Join now
                        </button>
                    </div>
                    <button className="lg:hidden flex flex-col justify-center items-center w-8 h-8 p-1 rounded-md hover:bg-gray-100 transition-colors duration-200" onClick={toggleMenu} aria-label="Toggle menu">
                        <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>
                </div>
            </div>
        </div>
        {isMenuOpen && <div className="lg:hidden fixed inset-0 bg-black opacity-25 z-40" onClick={toggleMenu}></div>}
        <div className={`lg:hidden fixed top-24 right-0 h-screen w-80 bg-white shadow-2xl transition-transform duration-300 z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="px-6 py-4">
                <nav className="space-y-0 mb-6">
                    {navigationItems.map((item) => (
                        <a key={item.label} href={item.href} className="block text-gray-800 hover:text-green-600 font-medium text-lg py-4 border-b border-gray-100" onClick={toggleMenu}>
                            {item.label}
                        </a>))}
                </nav>
                <div className="flex space-x-3 mb-6">
                    <button className="flex-1 text-black font-medium border border-black px-4 py-3 rounded-full" onClick={toggleMenu}>Sign in</button>
                    <button className="flex-1 bg-black text-white font-medium px-4 py-3 rounded-full" onClick={toggleMenu}>Join now</button>
                </div>
                <button className="flex items-center space-x-3 text-gray-800 hover:text-green-600 font-medium py-2 w-full text-left">
                    <IoLocationSharp className="text-xl"/>
                    <span>Find a store</span>
                </button>
            </div>
        </div>
    </header>
  );
};

export default Header;