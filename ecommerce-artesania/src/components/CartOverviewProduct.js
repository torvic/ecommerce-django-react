import React, { useState } from 'react';

const CartOverviewProduct = ({ el, db, updateOrderItem }) => {
  const [addItem, setAddItem] = useState(false);
  const [quantityItem, setQuantityItem] = useState(el.quantity);
  //console.log(quantityItem);
  //console.log(addItem);
  let { product, quantity } = el;
  const dbProduct = db.filter((el) => el.id === product);
  //console.log(dbProduct);
  /* orderItem = {
		id,
		product,
		quantity
	} */

  const handleArrowUp = (e) => {
    //update
    setQuantityItem((prev) => prev + 1);
    //console.log("update", {quantityItem});
    setAddItem(true);
  };

  const handleArrowDown = (e) => {
    if (!addItem && quantityItem === 1) {
      // delete
      console.log('delete');
    } else {
      // update
      setQuantityItem((prev) => prev - 1);
      //console.log("update", quantityItem);
      setAddItem(false);
    }
  };

  return (
    <div className="cart-row">
      <div style={{ flex: '2' }}>
        <img
          className="row-image"
          src={
            !dbProduct[0].image
              ? 'images/placeholder.png'
              : `http://127.0.0.1:8000${dbProduct[0].image}`
          }
          alt=""
        />
      </div>
      <div style={{ flex: '2' }}>
        <p>{dbProduct[0].name}</p>
      </div>
      <div style={{ flex: '1' }}>
        <p>$ {dbProduct[0].price}</p>
      </div>
      <div style={{ flex: '1' }}>
        <p className="quantity">{quantity}</p>
        <div className="quantity">
          <img
            className="chg-quantity"
            src="images/arrow-up.png"
            onClick={handleArrowUp}
            alt=""
          />

          <img
            className="chg-quantity"
            src="images/arrow-down.png"
            onClick={handleArrowDown}
            alt=""
          />
        </div>
      </div>
      <div style={{ flex: '1' }}>
        <p>$ {dbProduct[0].price * quantity}</p>
      </div>
    </div>
  );
};

export default CartOverviewProduct;
