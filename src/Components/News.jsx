const News = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row my-9 md:mx-11 ">
        <div className="w-full md:w-1/2">
          <img src="new1.jpg" className="w-full h-64 md:h-full object-center" alt="Starbucks Frappuccino with cold foam being poured"/>
        </div>
        <div className="w-full md:w-1/2 beige flex flex-col justify-center items-center p-8 md:p-12">
          <div className="text-center max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Delightful Strato<span className="text-sm align-super">™</span><br />
              Frappuccino<span className="text-sm align-super">®</span><br />
              beverages
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Treat yourself to layers of flavor and rich cold foam, in Brown Sugar, Salted Caramel Mocha and Strawberry Matcha. Get them while you can—for a limited time.
            </p>
            <button className="border-2 border-gray-800 text-gray-800 px-4 py-1 rounded-full font-semibold text-lg hover:bg-gray-800 hover:text-white transition-colors">
              Order now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:my-9 md:mx-11 ">
        <div className="w-full md:w-1/2">
          <img src="new3.jpg" className="w-full h-64 md:h-full object-center" alt="Starbucks Frappuccino with cold foam being poured"/>
        </div>
        <div className="w-full md:w-1/2 bg-green-950 flex flex-col justify-center items-center p-8 md:p-12">
          <div className="text-center max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Super-smooth cold brews
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
              Savor refreshing sips of slow-steeped signature cold brew finished with Salted Caramel Cream Cold Foam or Vanilla Sweet Cream.
            </p>
            <button className="border-2 border-white text-white px-4 py-1 rounded-full font-semibold text-lg hover:bg-gray-800 hover:text-white transition-colors">
              Order now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:my-9 md:mx-11 ">
        <div className="w-full md:w-1/2 beige flex flex-col justify-center items-center p-8 md:p-12">
          <div className="text-center max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Our captivating new collection
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Nigerian-American artist Shadé Akanbi blends tradition and modernity to create rich prints and patterns. For a limited time.
            </p>
            <button className="border-2 border-gray-800 text-gray-800 px-4 py-1 rounded-full font-semibold text-lg hover:bg-gray-800 hover:text-white transition-colors">
              Order now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src="new4.jpg" className="w-full h-64 md:h-full object-center" alt="Starbucks Frappuccino with cold foam being poured"/>
        </div>
      </div>
      
    </div>
  )
}

export default News