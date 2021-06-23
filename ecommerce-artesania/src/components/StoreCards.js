import CardProduct from "./CardProduct";

const StoreCards = ({ data, createOrderItem }) => {
  return (
    <div className="row">
      {data.length > 0 ? (
        data.map((el) => <CardProduct key={el.id} el={el} createOrderItem={createOrderItem} />)
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
};

export default StoreCards;
