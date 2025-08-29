import { useEffect, useState } from "react";
import API from "../Provider/data.js";
import { IoIosArrowForward,IoIosArrowBack  } from "react-icons/io";


const Gift = () => {
  const [section, setSection] = useState(null);
  const [gift, setGift] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);


  useEffect(() => {
    API.getGift()
      .then((data) => {
        if (data?.length > 0) {
          const first = data[0];
          setSection(first);
          setGift(first?.eGifts || []);
        }
      })
      .catch((err) => console.error("Gift data fetch error:", err));
  }, []);

  // Navigasiya funksiyaları
  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(prev => Math.max(0, prev - visibleCount));
    }
  };

  const nextSlide = () => {
    const maxStart = gift.length - visibleCount;
    if (startIndex < maxStart) {
      setStartIndex(prev => Math.min(maxStart, prev + visibleCount));
    }
  };

  // Button görünürlük kontrolu
  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + visibleCount < gift.length;
  const shouldShowNavigation = gift.length > visibleCount;

  // Loading state
  if (!section || !gift.length) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-gray-200 h-64 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-32 my-16">
      <h1 className="font-bold text-4xl">Gift cards</h1>
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-">
        <h1 className="font-bold text-xl sm:text-2xl lg:text-xl text-gray-900 mt-10">
          {section.name}
        </h1>
        <button className="text-green-600 hover:text-green-700 text-sm sm:text-base font-medium transition-colors duration-200 self-start sm:self-center group">
          <span className="border-b border-transparent group-hover:border-green-600 transition-colors duration-200">
            See all
          </span>
        </button>
      </header>

      <div className="relative">
        <div className="flex items-center">
          {shouldShowNavigation && canGoPrev && (
            <button onClick={prevSlide} className="flex-shrink-0 mr-2 sm:mr-4 bg-white/95 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 z-10 group">
             <IoIosArrowBack />
            </button>
          )}
          <div className="flex gap-6 ">
            {gift.slice(startIndex, startIndex + visibleCount).map((item, index) => {
              return (
                  <div key={index} className="overflow-hidden rounded-xl hover:-translate-y-2 transition-transform duration-300  my-2">
                    <div className=" overflow-hidden">
                      <img src={item.largeImageUrl} alt={item.altText} className="w-full h-full object-cover" loading="lazy"/>
                    </div>
                  </div>
              );
            })}
          </div>
          {shouldShowNavigation && canGoNext && ( <button onClick={nextSlide} className="flex-shrink-0 ml-2 sm:ml-4 bg-white/95 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 z-10 group"><IoIosArrowForward /></button> )}
        </div>
      </div>
      <div className="flex bg-gray-300 rounded-2xl my-5">
        <img className="size-30 p-7" src="gift-cards.png" alt="" />
        <p className="my-auto">Effortlessly send up to 10 eGifts per purchase. Select a design to start!</p>
      </div>
    </div>
  );
};

export default Gift;