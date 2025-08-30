import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../Context/CartContext.jsx";
import FooterMenu from "./FooterMenu.jsx";

const CreateGift = () => {
  const { productNumber } = useParams(); 
  const location = useLocation();
  const gift = location.state; 
  const [recipients, setRecipients] = useState([{ name: "", email: "" }]);
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("$10");
  const [isAdding, setIsAdding] = useState(false);
  const { dispatch } = useCart();

  if (!gift) {
    return <p className="text-center mt-20">Gift not found. Please go back.</p>;
  }

  const addRecipient = () => {
    if (recipients.length < 10) {
      setRecipients([...recipients, { name: "", email: "" }]);
    }
  };

  const handleRecipientChange = (index, field, value) => {
    const updated = [...recipients];
    updated[index][field] = value;
    setRecipients(updated);
  };

  const handleAddToCart = () => {
    const validRecipients = recipients.filter(r => r.name.trim() && r.email.trim());
    
    if (validRecipients.length === 0) {
      alert("Please add at least one recipient with name and email.");
      return;
    }

    setIsAdding(true);

    const giftProduct = {
      productNumber: gift.productNumber || productNumber,
      name: `eGift Card - ${gift.altText || 'Starbucks Gift Card'}`,
      imageURL: gift.largeImageUrl,
      type: 'gift-card'
    };

    const giftDetails = {
      sizeCode: "Gift Card",
      fl: 0, 
      price: parseFloat(amount.replace('$', '')),
      recipients: validRecipients,
      message: message.trim(),
      amount: amount
    };

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product: giftProduct,
        selectedSize: giftDetails
      }
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6 px-4">
      <p className="text-gray-500">Gift / <span className="font-semibold">Create eGift</span></p>
      <h1 className="font-bold text-3xl">Create eGift</h1>
      <img src={gift.largeImageUrl} alt={gift.altText} className="w-full rounded-xl"/>
      <div>
        <h2 className="text-xl font-semibold mb-2">Gift amount</h2>
        <select value={amount} onChange={(e) => setAmount(e.target.value)}className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
          <option>$10</option>
          <option>$25</option>
          <option>$50</option>
          <option>$100</option>
        </select>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Who are you gifting to?</h2>
        {recipients.map((r, i) => (
          <div key={i} className="flex flex-col space-y-2 mb-4">
            <input type="text" placeholder=" * Recipient Name" value={r.name} onChange={(e) => handleRecipientChange(i, "name", e.target.value)}
              className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required/>
            <input type="email" placeholder=" * Recipient Email" value={r.email}
              onChange={(e) => handleRecipientChange(i, "email", e.target.value)}
              className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required/>
          </div>
        ))}
        {recipients.length < 10 && (
          <button onClick={addRecipient} className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Add another recipient
          </button>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Personal note</h2>
        <textarea placeholder="Message (optional)" value={message} onChange={(e) => setMessage(e.target.value)}
          className="w-full border rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          maxLength={160} rows={4}/>
        <p className="text-gray-500 text-right text-sm">{message.length} / 160</p>
      </div>

      <button onClick={handleAddToCart} disabled={isAdding}
        className={`flex items-center justify-center px-6 py-3 rounded-full font-bold text-white text-base w-full transition-all duration-300 ${
          isAdding 
            ? 'bg-green-700 scale-95' 
            : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {isAdding ? '✓ Added to Cart!' : `Add ${amount} Gift Card to Order`}
      </button>
      <div className="bg-gray-50 rounded-xl p-4 mt-6">
        <h3 className="font-semibold mb-2">Order Summary</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p><span className="font-medium">Amount:</span> {amount}</p>
          <p><span className="font-medium">Recipients:</span> {recipients.filter(r => r.name.trim() && r.email.trim()).length}</p>
          {message && <p><span className="font-medium">Message:</span> "{message}"</p>}
        </div>
      </div>
      <FooterMenu/>
    </div>
  );
};

export default CreateGift;