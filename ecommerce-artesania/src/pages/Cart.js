import CartTotal from "../components/CartTotal";
import CartOverview from "../components/CartOverview";

const Cart = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
				<CartTotal/>
				<br />
				<CartOverview/>
      </div>
    </div>
  );
};

export default Cart;
