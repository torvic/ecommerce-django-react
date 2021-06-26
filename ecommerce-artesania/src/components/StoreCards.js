import CardProduct from './CardProduct';

const StoreCards = ({
  data,
  dbOrderItem,
  createOrderItem,
  updateOrderItem,
}) => {
  return (
    <div className="row">
      {data.length > 0 ? (
        data.map((el) => (
          <CardProduct
            key={el.id}
            el={el}
            dbOrderItem={dbOrderItem}
            createOrderItem={createOrderItem}
            updateOrderItem={updateOrderItem}
          />
        ))
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
};

export default StoreCards;
