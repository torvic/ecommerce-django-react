import { useContext } from 'react';
import OrderItemsContext from '../context/OrderItemsContext';
import CartOverviewOrderItem from './CartOverviewOrderItem';

const CartOverview = () => {
  const { dbOrderItem } = useContext(OrderItemsContext);
  return (
    <div className="box-element">
      <div className="cart-row">
        <div style={{ flex: '2' }}></div>
        <div style={{ flex: '2' }}>
          <strong>Item</strong>
        </div>
        <div style={{ flex: '1' }}>
          <strong>Price</strong>
        </div>
        <div style={{ flex: '1' }}>
          <strong>Quantity</strong>
        </div>
        <div style={{ flex: '1' }}>
          <strong>Total</strong>
        </div>
      </div>
      {dbOrderItem &&
        dbOrderItem.map((el) => <CartOverviewOrderItem key={el.id} el={el} />)}
    </div>
  );
};

export default CartOverview;
