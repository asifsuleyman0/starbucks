import { useLocation, useParams } from "react-router-dom";

const CreateGift = () => {
  const { productNumber } = useParams(); // URL-dəki nömrə
  const location = useLocation();
  const gift = location.state; // GiftList-dən gələn obyekt

  if (!gift) {
    return <p className="text-center mt-20">Gift not found. Please go back.</p>;
  }

  return (
    <div className="w-2xl mx-auto mt-10">
      <p className="text-gray-500">Gift / Create eGift</p>
      <h1 className="font-bold text-3xl mb-6">Create eGift</h1>

      <img
        src={gift.largeImageUrl}
        alt={gift.altText}
        className="w-full max-w-lg rounded-xl mb-4"
      />
      <h2 className="text-xl font-semibold">{gift.displayName}</h2>
      <p className="text-gray-600 mt-2">{gift.altText}</p>
      <p className="text-gray-500 mt-2">Product Number: {productNumber}</p>
    </div>
  );
};

export default CreateGift;
