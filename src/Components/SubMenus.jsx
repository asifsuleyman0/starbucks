import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../Provider/data.js";

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

  if (!category) return <div className="ml-26 mt-24">Loading...</div>;

  return (
    <div className="ml-26 mt-28 mb-10">
      <span className="text-gray-500">Menu / {category?.name}</span>
      <h1 className="font-bold text-3xl mt-5 mb-6">{category?.name}</h1>
      {category?.children?.map((child, i) => (
        <div key={i} className="mt-12">
          <h2 className="text-2xl font-bold mb-5 border-b border-gray-100 pb-5 w-7xl">{child.name}</h2>
          <div className="grid grid-cols-4 gap-y-10 pt-5">
            {child.products?.map((prod, k) => (
              <Link 
                key={k} 
                to={`/menu/${category.id}/product/${prod.productNumber}`} 
                className="flex flex-col items-center"
              >
                <div className="size-36 rounded-full overflow-hidden mb-2">
                  {prod.imageURL && <img className="scale-225 size-full" src={prod.imageURL} alt={prod.name}/>}
                </div>
                <h3 className="text-center text-xl max-w-xs">{prod.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryDetail;
