import Fetch from '../components/Fetch'
import Axios from '../components/Axios'
import '../css/review.css'
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Review() {
  return (
    <>
      <Helmet>
        <title>Reviews</title>
      </Helmet>
      <div className='container'>
        <body>
          <div className='container'>
            <header>Leave Reviews here</header>
            
              <Link to='/northstar-warehouse'>Return Home</Link>
                <h2>See what people think!</h2>
                <div className='image-placeholder'></div>
                <p></p>
                <p></p>
                <p></p>
                <input type='text' placeholder='Share your experience with us!'></input>
                <button type='submit' >Share</button>
              <p></p>
            
            <footer>Footer contents here</footer>
          
          </div>
        </body>
      </div>
    </>
  );
}

export default Review;