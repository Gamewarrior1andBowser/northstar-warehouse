import Fetch from '../components/Fetch'
import Axios from '../components/Axios'
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Review() {
  return (
    <>
    <Helmet>
        <title>Reviews</title>
    </Helmet>
    <div>
       <Link  to='/movies'>Search Movies</Link>
    </div>
    {/* Insert website logo as Home button*/}

    {/* Logic is that the user clicks on the product from the home page and comes here*/}
        {/* Insert product picture, maybe all product details here*/}
      <h2>See what people think!</h2>
        {/* Insert product reviews */}
        <input type='text' placeholder='Share your experience with us!'></input>
        <button type='submit' placeholder='Share' />

      <p></p>
    </>
  );
}

export default Review;