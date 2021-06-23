const CartOverviewProduct = ({el}) => {
	//console.log(el);
	let {product, quantity, total_price } = el;
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
        <p className="quantity">{quantity}</p>
        <div className="quantity">
          <img className="chg-quantity" src="images/arrow-up.png" />

          <img className="chg-quantity" src="images/arrow-down.png" />
        </div>
      </div>
      <div style={{ flex: "1" }}>
        <p>$ {total_price}</p>
      </div>
    </div>
  );
};

export default CartOverviewProduct;
