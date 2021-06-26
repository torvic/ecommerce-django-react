import { useState, useEffect } from 'react';
import CartTotal from '../components/CartTotal';
import CartOverview from '../components/CartOverview';

const Cart = ({ db, dbOrderItem, updateOrderItem }) => {
  console.log(db);
  console.log(dbOrderItem);
  const getTotalPrice = () => {
    let sumTotal = 0;
    let totalQuantity = 0;
    dbOrderItem.forEach((item) => {
      const dbFiltered = db.filter((el) => item.product === el.id);
      sumTotal += dbFiltered[0].price * item.quantity;
      totalQuantity += item.quantity;
    });
    return { sumTotal, totalQuantity };
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        {dbOrderItem && <CartTotal data={getTotalPrice()} />}
        <br />
        {dbOrderItem && db && (
          <CartOverview
            db={db}
            dbOrderItem={dbOrderItem}
            updateOrderItem={updateOrderItem}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
