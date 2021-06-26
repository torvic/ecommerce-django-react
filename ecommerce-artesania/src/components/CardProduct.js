const CardProduct = ({ el, dbOrderItem, createOrderItem, updateOrderItem }) => {
  let { id, name, price, image } = el;

  let dbOrderItemFiltered = dbOrderItem.filter((el) => el.product === id);
  //console.log(dbOrderItemFiltered);

  let orderItem = { order: 1, product: id, quantity: 1 };
  const handleClick = () => {
    if (dbOrderItemFiltered.length === 0) {
      // create
      createOrderItem(orderItem);
    } else {
      // update
      updateOrderItem({
        ...dbOrderItemFiltered[0],
        quantity: dbOrderItemFiltered[0].quantity + 1,
      });
    }
  };

  return (
    <div className="col-lg-4">
      <img
        className="thumbnail"
        src={
          !image ? 'images/placeholder.png' : `http://127.0.0.1:8000${image}`
        }
        alt={name}
      ></img>
      <div className="box-element product">
        <h6>
          <strong>{name}</strong>
        </h6>
        <hr />

        <button
          className="btn btn-outline-secondary add-btn"
          onClick={handleClick}
        >
          Add to Cart
        </button>
        <a className="btn btn-outline-success" href="#">
          View
        </a>
        <h4 style={{ display: 'inline-block', float: 'right' }}>
          <strong>${price}</strong>
        </h4>
      </div>
    </div>
  );
};

export default CardProduct;
