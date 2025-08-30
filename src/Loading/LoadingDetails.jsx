const LoadingDetails = () => {
  return (
    <div className="min-h-screen bg-white ml-36 py-12 animate-pulse">
      <div className="h-5 w-1/3 bg-gray-300 rounded mb-6"></div>
      <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 rounded-lg"></div>
        <div className="flex-1 space-y-4">
          <div className="h-10 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div>
        <div className="h-8 w-1/4 bg-gray-300 rounded mb-6"></div>
        <div className="flex flex-wrap gap-6 mb-12">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-gray-300 mb-3"></div>
              <div className="h-4 w-16 bg-gray-300 rounded mb-1"></div>
              <div className="h-4 w-10 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-40 h-12 bg-gray-300 rounded-full"></div>
        <div className="w-40 h-12 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default LoadingDetails;
