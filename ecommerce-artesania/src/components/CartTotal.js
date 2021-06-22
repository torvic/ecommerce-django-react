import { Link } from "react-router-dom";

const CartTotal = () => {
  return (
    <div className="box-element">
      <Link className="btn btn-outline-dark" to="/">
        &#x2190; Continue Shopping
      </Link>
      <br />
      <br />
      <table className="table">
        <tr>
          <th>
            <h5>
              Items: <strong>3</strong>
            </h5>
          </th>
          <th>
            <h5>
              Total:<strong> $42</strong>
            </h5>
          </th>
          <th>
            <Link
              style={{ float: "right", margin: "5px" }}
              className="btn btn-success"
              to="/checkout"
            >
              Checkout
            </Link>
          </th>
        </tr>
      </table>
    </div>
  );
};

export default CartTotal;
