import { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CheckoutForm from "../components/CheckoutForm";
import CheckoutSummary from "../components/CheckoutSummary";

const Checkout = () => {
	const [cart, setCart] = useState(null);	

	let endpoint = "http://127.0.0.1:8000/order_items/";
	useEffect(() => {
		helpHttp().get(endpoint).then(res => {
			//console.log(res);
			setCart(res);
		})
	}, [endpoint])

  return (
    <div className="row">
      <div className="col-lg-6">
        <CheckoutForm />
      </div>

      <div className="col-lg-6">
				{cart && <CheckoutSummary data={cart} />}
				
      </div>
    </div>
  );
};

export default Checkout;
