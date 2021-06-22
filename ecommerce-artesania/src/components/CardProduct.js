const CardProduct = () => {
  return (
    <div className="col-lg-4">
			<img className="thumbnail" src="images/placeholder.png"></img>
      <div className="box-element product">
        <h6>
          <strong>Product</strong>
        </h6>
        <hr />

        <button class="btn btn-outline-secondary add-btn" >Add to Cart</button>
        <a class="btn btn-outline-success" href="#">
          View
        </a>
        <h4 style={{ display: "inline-block", float: "right" }}>
          <strong>$20</strong>
        </h4>
      </div>
    </div>
  );
};

export default CardProduct;
