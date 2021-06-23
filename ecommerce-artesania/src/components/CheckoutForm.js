const CheckoutForm = () => {
  return (
    <div className="box-element" id="form-wrapper">
      <form id="form">
        <div id="user-info">
          <div className="form-field">
            <input
              required
              className="form-control"
              type="text"
              name="name"
              placeholder="Name.."
            />
          </div>
          <div className="form-field">
            <input
              required
              className="form-control"
              type="email"
              name="email"
              placeholder="Email.."
            />
          </div>
        </div>

        <div id="shipping-info">
          <hr />
          <p>Shipping Information:</p>
          <hr />
          <div className="form-field">
            <input
              className="form-control"
              type="text"
              name="address"
              placeholder="Address.."
            />
          </div>
          <div className="form-field">
            <input
              className="form-control"
              type="text"
              name="city"
              placeholder="City.."
            />
          </div>
          <div className="form-field">
            <input
              className="form-control"
              type="text"
              name="state"
              placeholder="State.."
            />
          </div>
          <div className="form-field">
            <input
              className="form-control"
              type="text"
              name="zipcode"
              placeholder="Zip code.."
            />
          </div>
          <div className="form-field">
            <input
              className="form-control"
              type="text"
              name="country"
              placeholder="Zip code.."
            />
          </div>
        </div>

        <hr />
        <input
          id="form-button"
          className="btn btn-success btn-block"
          type="submit"
          value="Continue"
        />
      </form>
    </div>
  );
};

export default CheckoutForm;
