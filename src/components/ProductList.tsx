import axios from "axios";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}
function ProductList() {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductList(res.data);
    };
    fetchProduct();
  }, []);

  const handleAddToCart = (product:Product) => {
    alert(`${product.title} added to cart`)
  };
  return (
    <>
      <div className="productList">
        {productList.map((product) => {
          return (
            <div key={product.id} className="w-full border-2 border-gray-300 rounded-md p-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-32 mx-auto object-contain mb-2"
              />
              <h1 className="text-lg">{product.title}</h1>
              <p className="font-bold">{product.price}</p>
              <button className="[.theme3_&]:bg-pink-400 [.theme3_&]:hover:bg-pink-600 [.theme2_&]:bg-gray-400 [.theme2_&]:hover:bg-gray-600 bg-blue-500 text-white rounded-md p-2 m-2 hover:bg-blue-600" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ProductList;
