import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p className="product-price">${product.price}</p>

      <Link to={`/product/${product.id}`} className="view-btn">
        View Product
      </Link>
    </div>
  );
}

export default ProductCard;