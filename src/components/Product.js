import "../App.css";
import { Link } from "react-router-dom";
function Product(props) {
  const { product, showButton } = props;

  return (
    <>
      <div className="card my_card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text my_description">{product.description}</p>
          <p>Price:${product.price}</p>
          {showButton && (
            <Link className="btn btn-primary" to={`products/${product.id}`}>
              Show Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Product;
