import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h2>New Home for renovation</h2>
      <Link to='/northstar-warehouse/Review'>See Reviews</Link>
    </>
  );
}

export default Home;