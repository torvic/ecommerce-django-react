import { useContext } from 'react';
import { Link } from 'react-router-dom';
import OrderItemsContext from '../context/OrderItemsContext';
import CheckoutSummaryProduct from './CheckoutSummaryProduct';

const CheckoutSummary = () => {
  const { dbOrderItem, dbProducts } = useContext(OrderItemsContext);

  const getTotalPrice = () => {
    let sumTotal = 0;
    let totalQuantity = 0;
    dbOrderItem.forEach((item) => {
      const dbFiltered = dbProducts.filter((el) => item.product === el.id);
      sumTotal += dbFiltered[0].price * item.quantity;
      totalQuantity += item.quantity;
    });
    return { sumTotal: Math.round(sumTotal * 100) / 100, totalQuantity };
  };
  let { sumTotal, totalQuantity } = getTotalPrice();

  return (
    <div className="box-element">
      <Link class="btn btn-outline-dark" to="/cart">
        &#x2190; Back to Cart
      </Link>
      <hr />
      <h3>Order Summary</h3>
      <hr />
      {dbOrderItem &&
        dbOrderItem.map((el) => <CheckoutSummaryProduct key={el.id} el={el} />)}
      <h5>Items: {totalQuantity}</h5>
      <h5>Total: $ {sumTotal}</h5>
    </div>
  );
};

export default CheckoutSummary;
