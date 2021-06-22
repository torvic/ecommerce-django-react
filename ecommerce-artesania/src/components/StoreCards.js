import CardProduct from "./CardProduct"

const StoreCards = ({data}) => {
	return (
		<div className="row">
			{data.length > 0 ? data.map(el => <CardProduct key={el.id} el={el}/>): <p>No hay productos</p> }
		</div>
	)
}

export default StoreCards
