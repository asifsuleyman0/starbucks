import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../Provider/data.js";

const Menus = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API.getData().then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="ml-33 mt-23">
        {categories.map((cat, i) => (
          <div key={i}>
            <h2 className="font-bold text-xl">{cat.name}</h2>
              {cat.children.map((item, j) => (
                <Link  key={j} to={`/menu${item.uri}`}>
                  <h3 className="my-4 text-gray-500 max-w-40 font-semibold ">{item.name}</h3>
                </Link>
              ))}
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Menus;
