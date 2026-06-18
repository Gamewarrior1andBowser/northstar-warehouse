import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);

        return axios.get("https://fakestoreapi.com/products");
      })
      .then(response => {
        const similar = response.data
          .filter(item => item.category === product?.category && item.id !== Number(id))
          .slice(0, 4);

        setSimilarProducts(similar);
      })
      .catch(() => {
        navigate("/northstar-warehouse");
      });
  }, [id, navigate, product?.category]);

  if (!product) {
    return <p>Loading product...</p>;
  }

  const addToCart = () => {
  const cartProduct = {
    ...product,
    quantity: quantity
  };

  localStorage.setItem("cart", JSON.stringify(cartProduct));

  navigate("/cart");
}

  return (
    <section className="product-page">
      <Link to="/northstar-warehouse" className="back-link">
        Back to Home
      </Link>

      <div className="product-detail">
        <div className="product-image-box">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info">
          <p className="product-category">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="detail-price">${product.price}</p>
          <p className="detail-description">{product.description}</p>

          <label>
            Quantity
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={event => setQuantity(event.target.value)}
            />
          </label>
        <button onClick={addToCart} className="add-cart-btn">
        Add to Cart
        </button>
        </div>
      </div>

      <section className="similar-section">
        <h2>Similar Products</h2>

        <div className="product-grid">
          {similarProducts.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Product;