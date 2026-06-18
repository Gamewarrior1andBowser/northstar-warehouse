import { Link } from "react-router-dom";

function ProductReview( product ) {
    return (
        <>
        <div className="product-overview">
      <h3>{product.title}</h3>
            
      <img src={product.image} alt={product.title} />


      <p className="product-price">${product.price}</p>
      <p className="product-category">${product.category}</p>

<p className="product-rating">{product.rating} </p>
<p className="product-descriptions">{product.description} </p>
        <Link to='/northstar-warehouse'>Return Home</Link>
        </div>
        
        </>
    )
}

export default ProductReview;