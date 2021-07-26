import { useContext } from 'react';
import { Link } from 'react-router-dom';
import OrderItemsContext from '../context/OrderItemsContext';
const Header = () => {
  const { dbOrderItem } = useContext(OrderItemsContext);
  const total = () => {
    let totalQuantity = 0;
    dbOrderItem.forEach((el) => (totalQuantity += el.quantity));
    return totalQuantity;
  };
  let totalItems = total();
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">
          Ecom
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Store <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <Link to="/login" className="btn btn-warning">
              Login
            </Link>
            <Link style={{marginLeft:'10px'}} to="/register" className="btn btn-warning">
              Register
            </Link>

            <Link to="/cart">
              <img id="cart-icon" src="images/cart.png" alt="" />
            </Link>
            <p id="cart-total">{totalItems}</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
