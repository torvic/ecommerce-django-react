const CartOverviewProduct = ({ el, db, updateOrderItem, deleteOrderItem }) => {
  let { id, product, quantity } = el;
  const dbProduct = db.filter((el) => el.id === product);

  const handleArrowUp = () => {
    //update
    updateOrderItem({ ...el, quantity: quantity + 1 });
  };

  const handleArrowDown = () => {
    if (quantity === 1) {
      // delete
      deleteOrderItem(id);
    } else {
      // update
      updateOrderItem({ ...el, quantity: quantity - 1 });
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
        <p>$ {Math.round(dbProduct[0].price * quantity * 100) / 100}</p>
      </div>
    </div>
  );
};

export default CartOverviewProduct;
