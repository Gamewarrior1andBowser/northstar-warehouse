// npm install axios

import axios from 'axios';
import { useEffect, useState }from 'react';

function Axios() {
    const [productId, setProductId] = useState('');
    const [product, setProduct] = useState(null);

    const URL = 'https://fakestoreapi.com/products';

    const inputProductId = event => {
        event.preventDefault();
        setProductId(event.target.product.value);
    }
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${URL}/${productId}`);
                console.log('Data from Axios')
                // console.log(response);
                console.log(response.data);
                setProduct(response.data);
            } catch (error) {
                console.log(error.message);
            }
        }

        if (productId > 0 && productId <= 20) fetchProducts();
    }, [productId]);

    return (
        <section>
            <h2>Fetching Data using Axios</h2>
            <form onSubmit={inputProductId}>
                <input type='text' name='product' placeholder='Enter the product id'/>
                <input type='submit' value='Fetch'/>
            </form>
            <div className='productInfo'>
            {product && (
                <>
                    <h3>{product.title}</h3>
                    &nbsp;
                    <img
                        src={product.image}
                        alt={product.title}
                        width="200"
                    />
                    &nbsp;
                    <p>
                        <strong >Description: </strong>
                        {product.description}
                    </p>
                    &nbsp;
                    <p>
                        <strong className='category'>Category: </strong>
                        &nbsp; {product.category}
                    </p>
                    &nbsp;
                    <p>
                        <strong className='price'>Price: </strong>
                        &nbsp; ${product.price}
                    </p>
                    &nbsp;
                    <p>
                        <strong className='rating'>Rating:  </strong>
                        &nbsp; {product.rating.rate}
                    </p>
                </>
            )}
            </div>
        </section>
    );
}

export default Axios;