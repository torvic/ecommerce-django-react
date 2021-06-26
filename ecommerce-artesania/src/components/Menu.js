import { Link } from 'react-router-dom';

const Menu = ({ dbOrderItem }) => {
  const total = () => {
    let totalQuantity = 0;
    dbOrderItem.forEach((el) => (totalQuantity += el.quantity));
    return totalQuantity;
  };
  let totalItems = total();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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

          <Link to="/cart">
            <img id="cart-icon" src="images/cart.png" alt="cart" />
          </Link>
          <p id="cart-total">{totalItems}</p>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
