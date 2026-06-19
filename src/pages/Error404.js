import { Link, NavLink } from "react-router-dom";

function Error404() {
  return (
    <section className="error">
      <div className="container">
        <h1>OOPS! Error 404</h1>
        <h3>The page you're looking for can't be found.</h3>
        <Link to='/northstar-warehouse'>Return Home</Link>
      </div>
    </section>
  );
}

export default Error404;