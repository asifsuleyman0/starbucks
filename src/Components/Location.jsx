import { useState } from "react";
import locations from "../Provider/locationData.js"; 

function Location() {
  const [search, setSearch] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);

  const handleSearch = () => {
    const term = search.toLowerCase();
    const filtered = locations.filter(loc => loc.name.toLowerCase().includes(term) || loc.address.toLowerCase().includes(term));
    setFilteredLocations(filtered);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-[400px] bg-white p-6 shadow-md overflow-y-auto flex-shrink-0">
        <div className="flex mb-4 border border-green-900 rounded-full overflow-hidden">
          <button className="flex-1 py-2 darkgreen text-white font-semibold">Pickup</button>
          <button className="flex-1 py-2 text-green-900 font-semibold">Delivery</button>
        </div>
        <input type="text" placeholder="Find a store" value={search} onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-2 focus:outline-none"/>
        <button onClick={handleSearch}
          className="w-full border border-green-900 text-green-900 rounded py-2 font-medium hover:bg-green-50 mb-4">
          Search
        </button>
        {filteredLocations.length > 0 && (
          <div className="border border-gray-300 rounded mt-2 max-h-64 overflow-y-auto">
            {filteredLocations.map((loc, index) => (
              <div key={index} className="p-2 hover:bg-green-50 cursor-pointer">
                <p className="font-semibold">{loc.name}</p>
                <p className="text-sm text-gray-600">{loc.address}</p>
              </div>
            ))}
          </div>
        )}
        <div className="mt-6 lg:mt-12 text-sm text-green-700 space-y-1"> 
          <a href="#" className="underline block">Privacy Notice</a> 
          <a href="#" className="underline block">Terms of Use</a> 
          <a href="#" className="underline block">Do Not Share My Personal Information</a> 
        </div>
      </div>
      <div className="flex-1 w-full h-[400px] lg:h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d201087.4541408944!2d49.819479825559974!3d40.43918589790777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sstarbucks!5e1!3m2!1sen!2saz!4v1756519926073!5m2!1sen!2saz"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
