import { useState } from 'react';
import CartOverviewProduct from './CartOverviewProduct';

const CartOverview = ({data}) => {
	let {summary} = data;
	//console.log(summary);

  return (
    <div className="box-element">
      <div className="cart-row">
        <div style={{ flex: "2" }}></div>
        <div style={{ flex: "2" }}>
          <strong>Item</strong>
        </div>
        <div style={{ flex: "1" }}>
          <strong>Price</strong>
        </div>
        <div style={{ flex: "1" }}>
          <strong>Quantity</strong>
        </div>
        <div style={{ flex: "1" }}>
          <strong>Total</strong>
        </div>
      </div>

			{summary && summary.map(el => <CartOverviewProduct key={el.id} el={el} />)}
						
    </div>
  );
};

export default CartOverview;
