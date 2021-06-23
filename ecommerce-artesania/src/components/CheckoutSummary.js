import { Link } from "react-router-dom"
import CheckoutSummaryProduct from "./CheckoutSummaryProduct";

const CheckoutSummary = ({data}) => {
	//console.log(data);
	let {summary, cart_items, cart_total } = data;
	return (
		<div className="box-element">
			<Link  className="btn btn-outline-dark" to="/cart">&#x2190; Back to Cart</Link>
				<hr/>
				<h3>Order Summary</h3>
				<hr/>

				{summary && summary.map(el => <CheckoutSummaryProduct key={el.id} el={el}/>)}
				

				<h5>Items:   {cart_items}</h5>
				<h5>Total:   $ {cart_total}</h5>
		</div>
	)
}

export default CheckoutSummary
