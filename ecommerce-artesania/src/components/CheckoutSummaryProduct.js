import { useContext } from 'react';
import OrderItemsContext from '../context/OrderItemsContext';

const CheckoutSummaryProduct = ({ el }) => {
  const { dbProducts } = useContext(OrderItemsContext);
  let { product, quantity } = el;
  const dbProduct = dbProducts.filter((el) => el.id === product);

  return (
    <div className="cart-row">
      <div style={{ flex: '2' }}>
        <img
          className="row-image"
          src={
            !dbProduct[0].image
              ? 'images/placeholder.png'
              : `http://127.0.0.1:8000${dbProduct[0].image}`
          }
          alt=""
        />
      </div>
      <div style={{ flex: '2' }}>
        <p>{dbProduct[0].name}</p>
      </div>
      <div style={{ flex: '1' }}>
        <p>$ {dbProduct[0].price}</p>
      </div>
      <div style={{ flex: '1' }}>
        <p>x{quantity}</p>
      </div>
    </div>
  );
};

export default CheckoutSummaryProduct;
