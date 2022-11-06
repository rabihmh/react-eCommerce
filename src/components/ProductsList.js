import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <div className="row">
          {product.map((PRODUCT) => {
            return (
              <div className="col-3 mb-3" key={PRODUCT.id}>
                <Product product={PRODUCT} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductsList;
