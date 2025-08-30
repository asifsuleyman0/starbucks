import { useEffect, useState } from "react";
import API from "../Provider/data.js";
import { Link } from "react-router-dom";
import LoadingSkeleton from "../Loading/LoadingList.jsx";

const List = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.getData().then((data) => {
      setList(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingSkeleton />;

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-26 mt-12 sm:mt-16 md:mt-20 lg:mt-24 mb-10">
      <h1 className="font-bold text-2xl sm:text-3xl mb-4">Menu</h1>
      <div>
        {list.map((inf, i) => (
          <div key={i}>
            <h2 className="font-bold text-xl sm:text-2xl mt-8 sm:mt-12 mb-6 sm:mb-8 border-b border-gray-200 pb-3 sm:pb-5">
              {inf.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-16 lg:gap-x-38 gap-y-6 sm:gap-y-8">
              {inf.children.map((item, j) => (
                <Link key={j} to={`/menu/${item.id}`}>
                  <div className="flex items-center cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200">
                    <div className="size-20 sm:size-24 md:size-28 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                      {item.categoryImageURL && (
                        <img className="w-full h-full scale-225" src={item.categoryImageURL} alt={item.name}/>
                      )}
                    </div>
                    <span className="ml-3 sm:ml-4 text-lg sm:text-xl font-medium text-gray-900">{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;