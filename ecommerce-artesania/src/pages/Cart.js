import CartTotal from '../components/CartTotal';
import CartOverview from '../components/CartOverview';

const Cart = ({ db, dbOrderItem, updateOrderItem, deleteOrderItem }) => {
  //console.log(db);
  //console.log(dbOrderItem);
  const getTotalPrice = () => {
    let sumTotal = 0;
    let totalQuantity = 0;
    dbOrderItem.forEach((item) => {
      const dbFiltered = db.filter((el) => item.product === el.id);
      sumTotal += dbFiltered[0].price * item.quantity;
      totalQuantity += item.quantity;
    });
    return { sumTotal: Math.round(sumTotal * 100) / 100, totalQuantity };
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        {dbOrderItem && <CartTotal data={getTotalPrice()} />}
        <br />
        {dbOrderItem && db && (
          <CartOverview
            db={db}
            dbOrderItem={dbOrderItem}
            updateOrderItem={updateOrderItem}
            deleteOrderItem={deleteOrderItem}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
