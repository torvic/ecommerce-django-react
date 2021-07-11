import { useContext } from 'react';
import StoreCardProduct from '../components/StoreCardProduct';
import OrderItemsContext from '../context/OrderItemsContext';

const Store = () => {
  const { dbProducts } = useContext(OrderItemsContext);
  return (
    <main>
      <div className="row container">
        {/* {dbProducts &&
        dbProducts.map((el) => <CardProduct key={el.id} el={el} />)} */}
        {dbProducts.length > 0 ? (
          dbProducts.map((el) => <StoreCardProduct key={el.id} el={el} />)
        ) : (
          <p>No hay productos</p>
        )}
      </div>
    </main>
  );
};

export default Store;
