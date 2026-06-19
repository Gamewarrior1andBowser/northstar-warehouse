import { Link } from "react-router-dom";
import ProductReview
 from "./ProductReview";
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <h3 className="product-title">{product.title}</h3>

      <p className="product-price">${product.price}</p>

      <div>
        <Link to={`/product/${product.id}`} className="view-btn">
          View Product
        </Link>
      </div>
      
      <ProductReview productId={product.id} productDisplay={product} productTitle={product.title} productPrice={product.price}
        productCategory={product.category} productDescription={product.description} productImage={product.image}
      />
      
    </div>
  );
}

export default ProductCard;