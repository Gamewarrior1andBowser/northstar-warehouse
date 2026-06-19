import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";

function ProductSection() {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("name");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(response => setProducts(response.data))
      .catch(() => setError("Unable to load products."));
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "price") {
      return a.price - b.price;
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <section className="products-section">
      <h2>Our Products</h2>

      <select
        className="sort-select"
        value={sortType}
        onChange={e => setSortType(e.target.value)}
      >
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>

      <div className="product-grid">
        {sortedProducts.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
  
    </section>
  );
}

export default ProductSection;