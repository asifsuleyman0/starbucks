import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../Provider/data.js";

const ProductDetail = () => {
  const { id } = useParams(); // productNumber
  const [product, setProduct] = useState(null);

  useEffect(() => {
    API.getData().then((data) => {
      const findProduct = (nodes) => {
        for (let node of nodes) {
          if (node.products?.length) {
            const found = node.products.find(
              (p) => String(p.productNumber) === id
            );
            if (found) return found;
          }
          if (node.children?.length) {
            const found = findProduct(node.children);
            if (found) return found;
          }
        }
        return null;
      };
      setProduct(findProduct(data));
    });
  }, [id]);

  if (!product) return <p className="m-10">Loading product...</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.imageURL}
        alt={product.name}
        className="w-80 h-80 object-cover rounded-xl mb-6"
      />
      <p className="text-lg font-medium mb-2">Type: {product.productType}</p>
      <p className="text-gray-500 mb-2">Form: {product.formCode}</p>
      <p className="text-gray-500 mb-2">Availability: {product.availability}</p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Available sizes:</h2>
      <ul className="list-disc ml-6">
        {product.sizes?.map((s, i) => (
          <li key={i}>{s.sizeCode}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
