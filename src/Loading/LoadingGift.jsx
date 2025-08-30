const LoadingGift = () => {
  return (
    <>
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-32 py-6 sm:py-8 lg:py-16">
        <div className="animate-pulse">
          <div className="h-6 sm:h-8 lg:h-10 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-gray-200 h-40 sm:h-48 md:h-56 lg:h-64 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default LoadingGift