import { Link } from 'react-router-dom';
import CheckoutSummaryProduct from './CheckoutSummaryProduct';

const CheckoutSummary = ({ db, dbOrderItem }) => {
  const getTotalPrice = () => {
    let sumTotal = 0;
    let totalQuantity = 0;
    dbOrderItem.forEach((item) => {
      const dbFiltered = db.filter((el) => item.product === el.id);
      sumTotal += dbFiltered[0].price * item.quantity;
      totalQuantity += item.quantity;
    });
    return { sumTotal: Math.round(sumTotal * 100) / 100, totalQuantity };
  };
  let { sumTotal, totalQuantity } = getTotalPrice();
  return (
    <div className="box-element">
      <Link className="btn btn-outline-dark" to="/cart">
        &#x2190; Back to Cart
      </Link>
      <hr />
      <h3>Order Summary</h3>
      <hr />

      {dbOrderItem &&
        dbOrderItem.map((el) => (
          <CheckoutSummaryProduct key={el.id} el={el} db={db} />
        ))}

      <h5>Items: {totalQuantity}</h5>
      <h5>Total: $ {sumTotal}</h5>
    </div>
  );
};

export default CheckoutSummary;
