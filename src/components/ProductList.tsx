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
  return (
    <>
      <div className="productList">
        {productList.map((product) => {
          return (
            <div key={product.id} className="">
              <img
                src={product.image}
                alt={product.title}
                className="h-32 mx-auto object-contain mb-2"
              />
              <h1 className="text-lg">{product.title}</h1>
              <p className="font-bold">{product.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ProductList;
