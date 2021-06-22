import { useState } from 'react';

const CartOverview = () => {
	const [quantity, setQuantity] = useState(1);

	const handleQuantityAdd = e => {
		setQuantity(quantity + 1)
	}; 
	const handleQuantityRemove = e => {
		setQuantity(quantity - 1);
	}; 


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

      <div className="cart-row">
        <div style={{ flex: "2" }}>
          <img className="row-image" src="images/placeholder.png" />
        </div>
        <div style={{ flex: "2" }}>
          <p>Product 1</p>
        </div>
        <div style={{ flex: "1" }}>
          <p>$20</p>
        </div>
        <div style={{ flex: "1" }}>
          <p className="quantity">{quantity }</p>
          <div className="quantity">
            <img className="chg-quantity" src="images/arrow-up.png" onClick={handleQuantityAdd} />

						{quantity < 2 ? null : <img className="chg-quantity" src="images/arrow-down.png" onClick={handleQuantityRemove} />}
            
          </div>
        </div>
        <div style={{ flex: "1" }}>
          <p>$32</p>
        </div>
      </div>
    </div>
  );
};

export default CartOverview;
