import React, { useState } from 'react';

const CartOverviewProduct = ({el, updateOrderItem}) => {
	const [addItem, setAddItem] = useState(false)
	const [quantityItem, setQuantityItem] = useState(el.quantity)
	//console.log(quantityItem);
	//console.log(addItem);
	let {id, product, quantity, total_price } = el;
	/* orderItem = {
		id,
		product,
		quantity
	} */
	
	const handleArrowUp = e => {
		//update
		setQuantityItem((prev) => prev+1);
		//console.log("update", {quantityItem});
		setAddItem(true);
	};

	const handleArrowDown = e => {
		if (!addItem && quantityItem === 1) {
			// delete
			console.log("delete");
		} else {
			// update
			setQuantityItem((prev) => prev-1);
			//console.log("update", quantityItem);
			setAddItem(false);
		}
	};


  return (
    <div className="cart-row">
      <div style={{ flex: "2" }}>
        <img className="row-image" src={!product.image ? "images/placeholder.png":`http://127.0.0.1:8000${product.image}`} />
      </div>
      <div style={{ flex: "2" }}>
        <p>{product.name}</p>
      </div>
      <div style={{ flex: "1" }}>
        <p>$ {product.price}</p>
      </div>
      <div style={{ flex: "1" }}>
        <p className="quantity" >{quantity}</p>
        <div className="quantity">
          <img className="chg-quantity" src="images/arrow-up.png" onClick={handleArrowUp} />

          <img className="chg-quantity" src="images/arrow-down.png" onClick={handleArrowDown} />
        </div>
      </div>
      <div style={{ flex: "1" }}>
        <p>$ {total_price}</p>
      </div>
    </div>
  );
};

export default CartOverviewProduct;
