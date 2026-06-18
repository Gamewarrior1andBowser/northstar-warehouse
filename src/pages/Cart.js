import { Link } from "react-router-dom";

function Cart() {
  const product = JSON.parse(localStorage.getItem("cart"));
  const total = product ? product.price * product.quantity : 0;

  if (!product) {
    return (
      <section className="cart-page">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>

        <Link to="/northstar-warehouse" className="continue-shopping">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-layout">
        <div className="cart-item">
          <img src={product.image} alt={product.title} />

          <div className="cart-info">
            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <div className="quantity-box">
              <button>-</button>
              <span>{product.quantity}</span>
              <button>+</button>
            </div>
          </div>

          <div className="cart-price">
        <button className="delete-btn">Delete</button>
          </div>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>

          <Link to="/northstar-warehouse" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;