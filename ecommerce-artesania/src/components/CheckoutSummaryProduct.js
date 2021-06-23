const CheckoutSummaryProduct = ({el}) => {
	let {product, quantity} = el;

  return (
    <div className="cart-row">
      <div style={{ flex: "2" }}>
        <img className="row-image" src={!product.image ?  "images/placeholder.png":`http://127.0.0.1:8000${product.image}`} />
      </div>
      <div style={{ flex: "2" }}>
        <p>{product.name}</p>
      </div>
      <div style={{ flex: "1" }}>
        <p>$ {product.price}</p>
      </div>
      <div style={{ flex: "1" }}>
        <p>x{quantity}</p>
      </div>
    </div>
  );
};

export default CheckoutSummaryProduct;
