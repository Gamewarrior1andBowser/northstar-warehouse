import { Link } from "react-router-dom";

function ProductReview({ product }) {
  if (!product) return null;

  return (
    <>
      <div className="product-overview">
        <h3>{product.title}</h3>

        <img src={product.image} alt={product.title} />

        <p>${product.price}</p>

        <p>{product.category}</p>

        <p>Rating: {product.rating?.rate}</p>

        <p>{product.description}</p>

        <Link to="/">Return Home</Link>
      </div>

      <textarea placeholder="Share your thoughts"></textarea>

      <button type="submit">Share</button>
    </>
  );
}

export default ProductReview;