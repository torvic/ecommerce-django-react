import { useState } from 'react';

const CardProduct = ({ el, dbOrderItem, createOrderItem, updateOrderItem }) => {
  const [quantity, setQuantity] = useState(1);
  let { id, name, price, image } = el;
  let orderItem = { order: 1, product: id, quantity };

  let dbOrderItemFiltered = dbOrderItem.filter((el) => el.product === id);
  console.log(dbOrderItemFiltered);

  //if (quantity !== 1) {
  //  dbOrderItemFiltered = { ...dbOrderItemFiltered, quantity };
  //}

  const handleClick = () => {
    if (dbOrderItemFiltered.length === 0) {
      setQuantity(2);
      createOrderItem(orderItem);
    } else {
      // update
      setQuantity((prev) => prev + 1);
      updateOrderItem({ ...orderItem, id: dbOrderItemFiltered[0].id });
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
