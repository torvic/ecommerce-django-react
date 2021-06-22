import { Link } from "react-router-dom"

const CheckoutSummary = () => {
	return (
		<div className="box-element">
			<Link  class="btn btn-outline-dark" to="/cart">&#x2190; Back to Cart</Link>
				<hr/>
				<h3>Order Summary</h3>
				<hr/>
				<div class="cart-row">
					<div style={{flex:"2"}}><img class="row-image" src="images/placeholder.png"/></div>
					<div style={{flex:"2"}}><p>Product 1</p></div>
					<div style={{flex:"1"}}><p>$20.00</p></div>
					<div style={{flex:"1"}}><p>x2</p></div>
				</div>
				<h5>Items:   2</h5>
				<h5>Total:   $4</h5>
		</div>
	)
}

export default CheckoutSummary
