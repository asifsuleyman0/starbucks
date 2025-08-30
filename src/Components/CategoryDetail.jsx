import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../Provider/data.js";
import LoadingList from "../Loading/LoadingList.jsx";

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    API.getData().then((data) => {
      const findCategory = (list) => {
        for (let item of list) {
          if (item.id === categoryId || item.uri?.endsWith(categoryId)) return item;
          if (item.children) {
            const childResult = findCategory(item.children);
            if (childResult) return childResult;
          }
        }
        return null;
      };
      setCategory(findCategory(data));
    });
  }, [categoryId]);

  if (!category) return <LoadingList/>;

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-26 mt-12 sm:mt-16 md:mt-20 lg:mt-28 mb-10">
      <span className="text-gray-500 text-sm sm:text-base">
        <Link to={'/menu'}>Menu</Link> / {category?.name}
          </span>
      <h1 className="font-bold text-2xl sm:text-3xl mt-3 sm:mt-5 mb-4 sm:mb-6">{category?.name}</h1>
      
      {category?.children?.map((child, i) => (
        <div key={i} className="mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 border-b border-gray-100 pb-3 sm:pb-5">
            {child.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-6 sm:gap-y-8 lg:gap-y-10 pt-3 sm:pt-5">
            {child.products?.map((prod, k) => (
              <Link key={k} to={`/menu/${category.id}/product/${prod.productNumber}`} 
                className="flex flex-col items-center hover:bg-gray-50 rounded-lg p-2 sm:p-3 transition-colors duration-200">
                <div className="size-34 sm:size-36 md:size-38 lg:size-36 rounded-full overflow-hidden mb-2 sm:mb-3 bg-gray-100 flex-shrink-0">
                  {prod.imageURL && (
                    <img className="w-full h-full scale-225" src={prod.imageURL} alt={prod.name}/>
                  )}
                </div>
                <h3 className="text-center text-sm sm:text-base lg:text-xl font-medium text-gray-900 max-w-full px-1">
                  {prod.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryDetail;