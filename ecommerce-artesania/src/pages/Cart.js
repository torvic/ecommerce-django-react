import { useState, useEffect } from 'react'
import CartTotal from "../components/CartTotal";
import CartOverview from "../components/CartOverview";
import { helpHttp } from '../helpers/helpHttp';

const Cart = () => {
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
      <div className="col-lg-12">
				{cart && <CartTotal data={cart} />}
				<br />
				{cart && <CartOverview data={cart} />}
				
      </div>
    </div>
  );
};

export default Cart;
