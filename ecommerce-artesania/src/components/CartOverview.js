import { useState } from 'react';
import CartOverviewProduct from './CartOverviewProduct';

const CartOverview = ({ db, dbOrderItem, updateOrderItem }) => {
  //console.log(db);
  //console.log(dbOrderItem);

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
        dbOrderItem.map((el) => (
          <CartOverviewProduct
            key={el.id}
            el={el}
            db={db}
            updateOrderItem={updateOrderItem}
          />
        ))}
    </div>
  );
};

export default CartOverview;
