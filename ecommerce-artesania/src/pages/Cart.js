import { useState, useEffect } from 'react'
import CartTotal from "../components/CartTotal";
import CartOverview from "../components/CartOverview";
import { helpHttp } from '../helpers/helpHttp';

const Cart = ({updateOrderItem}) => {
	const [cart, setCart] = useState(null);	

	let url = "http://127.0.0.1:8000/order_items/";

	useEffect(() => {
		helpHttp().get(url).then(res => {
			//console.log(res);
			setCart(res);
		})
	}, [url])

  return (
    <div className="row">
      <div className="col-lg-12">
				{cart && <CartTotal data={cart} />}
				<br />
				{cart && <CartOverview data={cart} updateOrderItem={updateOrderItem} />}
				
      </div>
    </div>
  );
};

export default Cart;
