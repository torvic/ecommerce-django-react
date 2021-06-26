import { Link } from 'react-router-dom';

const CartTotal = ({ data }) => {
  let { sumTotal, totalQuantity } = data;
  //console.log(data);
  return (
    <div className="box-element">
      <Link className="btn btn-outline-dark" to="/">
        &#x2190; Continue Shopping
      </Link>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>
              <h5>
                Items: <strong>{totalQuantity}</strong>
              </h5>
            </th>
            <th>
              <h5>
                Total:<strong> $ {sumTotal}</strong>
              </h5>
            </th>
            <th>
              <Link
                style={{ float: 'right', margin: '5px' }}
                className="btn btn-success"
                to="/checkout"
              >
                Checkout
              </Link>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default CartTotal;
