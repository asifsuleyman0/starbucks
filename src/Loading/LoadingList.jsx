const LoadingList = () => {
  return (
    <div className="ml-26 mt-24 mb-10 animate-pulse">
      <div className="h-10 w-1/3 bg-gray-300 rounded mb-6"></div>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="mb-12">
          <div className="h-8 w-1/4 bg-gray-300 rounded mb-4"></div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {[...Array(4)].map((_, j) => (
              <div key={j} className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gray-300 rounded-full"></div> 
                <div className="h-5 w-24 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingList;
