import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import API from "../Provider/data.js";
import LoadingGift from "../Loading/LoadingGift.jsx";

const Gift = () => {
  const [section, setSection] = useState(null);
  const [gift, setGift] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(2);
      else if (width < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const prevSlide = () => setStartIndex((prev) => Math.max(0, prev - visibleCount));
  const nextSlide = () => setStartIndex((prev) => Math.min(gift.length - visibleCount, prev + visibleCount));

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + visibleCount < gift.length;
  const showNavigation = gift.length > visibleCount;

  if (!section || !gift.length) return <LoadingGift />;

  return (
    <div className="mx-4 sm:mx-8 lg:mx-16 xl:mx-32 my-8 sm:my-12 lg:my-16">
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 lg:mb-10">
        Gift cards
      </h1>
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
        <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900">{section.name}</h2>
        <button className="text-green-600 hover:text-green-700 text-sm sm:text-base font-medium transition-colors duration-200 self-start sm:self-center group">
          <span className="border-b border-transparent group-hover:border-green-600 transition-colors duration-200">
            See all
          </span>
        </button>
      </header>

      <div className="relative">
        <div className="flex items-center">
          {showNavigation && canGoPrev && (
            <ArrowButton onClick={prevSlide} direction="left" className="hidden sm:flex" />
          )}
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-3 sm:gap-4 lg:gap-6 transition-transform duration-300"style={{ transform: `translateX(-${startIndex * (100 / visibleCount)}%)` }}>
              {gift.map((item, index) => (
                <GiftItem key={index} item={item} visibleCount={visibleCount}
                  onClick={() => navigate(`/gift/${item.productNumber}`, { state: item })}/>
              ))}
            </div>
          </div>

          {showNavigation && canGoNext && (
            <ArrowButton onClick={nextSlide} direction="right" className="hidden sm:flex" />
          )}
        </div>

        {showNavigation && (
          <div className="flex sm:hidden justify-center gap-4 mt-4">
            <ArrowButton onClick={prevSlide} direction="left" disabled={!canGoPrev} />
            <ArrowButton onClick={nextSlide} direction="right" disabled={!canGoNext} />
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row bg-gray-300 rounded-2xl my-5 p-4 sm:p-6 lg:p-7 gap-4 sm:gap-6">
        <img className="size-24 sm:w-24 sm:h-24 lg:w-30 lg:h-30 flex-shrink-0 mx-auto sm:mx-0" src="gift-cards.png" alt="Gift"/>
        <p className="text-center sm:text-left text-sm sm:text-base lg:text-lg my-auto leading-relaxed">
          Effortlessly send up to 10 eGifts per purchase. Select a design to start!
        </p>
      </div>
    </div>
  );
};

const GiftItem = ({ item, visibleCount, onClick }) => (
  <div className="flex-shrink-0 rounded-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
    style={{ width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * (24 / visibleCount)}px)` }} onClick={onClick}>
    <img src={item.largeImageUrl} alt={item.altText} className="w-full h-full rounded-2xl"loading="lazy"/>
  </div>
);

const ArrowButton = ({ onClick, direction, className = "", disabled = false }) => (
  <button onClick={onClick} disabled={disabled}className={`bg-white/95 backdrop-blur-sm p-2 lg:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 flex items-center justify-center ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
    {direction === "left" ? <IoIosArrowBack className="text-lg lg:text-xl" /> : <IoIosArrowForward className="text-lg lg:text-xl" />}
  </button>
);

export default Gift;
