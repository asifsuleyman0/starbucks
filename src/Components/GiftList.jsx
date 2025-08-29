import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Provider/data.js";

const GiftList = () => {
  const [gifts, setGifts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.getGift()
      .then((data) => {
        if (data?.length > 1) {
          setGifts(data.slice(1));
        }
      })
      .catch((err) => console.error("Gift data fetch error:", err));
  }, []);

  return (
    <div className="mx-32 my-16">
      <h1 className="font-bold text-4xl mb-10">Gift cards</h1>

      {gifts.map((section, i) => (
        <div key={i} className="mb-12">
          <h2 className="font-bold text-2xl text-gray-900 mb-6">{section.name}</h2>

          <div className="flex flex-wrap gap-6">
            {section.eGifts?.length ? (
              section.eGifts.map((item, j) => (
                <div
                  key={j}
                  className="overflow-hidden rounded-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
                  onClick={() =>
                    navigate(`/gift/${item.productNumber}`, { state: item })
                  }
                >
                  <img
                    src={item.largeImageUrl}
                    alt={item.altText}
                    className="w-64 h-40 object-cover"
                    loading="lazy"
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">No gifts available.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GiftList;
