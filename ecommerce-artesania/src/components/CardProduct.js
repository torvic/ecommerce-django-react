import { useState } from "react";

const CardProduct = ({ el, createOrderItem }) => {
  let { id, name, price, image } = el;
  let orderItem = { product: id, order: 1, quantity: 1};

  const handleClick = (e) => {
    createOrderItem(orderItem);
  };

  return (
    <div className="col-lg-4">
      <img
        className="thumbnail"
        src={
          !image ? "images/placeholder.png" : `http://127.0.0.1:8000${image}`
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
        <h4 style={{ display: "inline-block", float: "right" }}>
          <strong>${price}</strong>
        </h4>
      </div>
    </div>
  );
};

export default CardProduct;
