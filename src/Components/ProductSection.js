import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";

// function ProductSection() {
//   const [products, setProducts] = useState([]);
//   const [sortType, setSortType] = useState("name");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then(response => setProducts(response.data))
//       .catch(() => {
//         setError("Unable to load products.");
//       });
//   }, []);

//   const sortedProducts = [...products].sort((a, b) => {
//     if (sortType === "price") {
//       return a.price - b.price;
//     }

//     return a.title.localeCompare(b.title);
//   });

//   return (
//     <section className="products-section" id="products">
//       <h2>Our Products</h2>

//       {error && <p>{error}</p>}

//       <select
//         className="sort-select"
//         value={sortType}
//         onChange={event => setSortType(event.target.value)}
//       >
//         <option value="name">Sort by Name</option>
//         <option value="price">Sort by Price</option>
//       </select>

//       <div className="product-grid">
//         {sortedProducts.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>

//     </section>
//   );
// }

// export default ProductSection;





function ProductSection({ setSelectedProduct }) {
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

      {error && <p>{error}</p>}

      <select
        value={sortType}
        onChange={e => setSortType(e.target.value)}
      >
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>

      <div className="product-grid">
        {sortedProducts.map(product => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
          >
            <Link to="/product">
              <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;