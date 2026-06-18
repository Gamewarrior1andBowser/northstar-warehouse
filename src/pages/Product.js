import ProductReview from "../components/ProductReview";

function Product({ product }) {
  if (!product) {
    return <p>No product selected. Go back and choose one.</p>;
  }

  return (
    <>
      <h1>Product Page</h1>

      <ProductReview product={product} />
    </>
  );
}

export default Product;