import { useEffect, useState } from "react";
import API from "../Provider/data.js";
import { Link } from "react-router-dom";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    API.getData().then((data) => setList(data));
  }, []);

  return (
    <div className="ml-26 mt-24 mb-10">
      <h1 className="font-bold text-3xl">Menu</h1>
      <div>
        {list.map((inf, i) => (
          <div key={i}>
            <h2 className="font-bold text-2xl mt-12 mb-8 border-b-1 border-gray-200 w-svh pb-5">
              {inf.name}
            </h2>
            <div className="grid grid-cols-2 gap-x-38 gap-y-8">
              {inf.children.map((item, j) => (
                <Link key={j} to={`/menu/${item.id}`}>
                  <div className="flex cursor-pointer">
                    <div className="size-28 rounded-full overflow-hidden">
                      {item.categoryImageURL && (
                        <img className="scale-225 size-full" src={item.categoryImageURL} alt=""/>
                      )}
                    </div>
                    <span className="my-auto mx-4 text-xl">{item.name}</span>
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
