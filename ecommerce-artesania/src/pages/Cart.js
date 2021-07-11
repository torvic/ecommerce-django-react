import CartTotal from '../components/CartTotal';
import CartOverview from '../components/CartOverview';
import { useContext } from 'react';
import OrderItemsContext from '../context/OrderItemsContext';

const Cart = () => {
  const { dbProducts, dbOrderItem } = useContext(OrderItemsContext);

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

  return (
    <div className="row container">
      <div className="col-lg-12">
        <CartTotal data={getTotalPrice()} />
        <br />
        {dbOrderItem && dbProducts && <CartOverview />}
      </div>
    </div>
  );
};

export default Cart;
