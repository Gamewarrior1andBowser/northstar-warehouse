import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>Northstar-warehouse</h1>
            </div>

            <nav className="navigation">
                <ul>
                    <li>
                       <Link to="/northstar-warehouse">Home</Link>
                    </li>

                    <li>
                       <a href="#products">Products</a>
                    </li>

                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;