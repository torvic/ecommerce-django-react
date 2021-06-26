import Loader from '../components/Loader';
import StoreCards from '../components/StoreCards';
import Message from '../components/Message';

const Store = ({
  createOrderItem,
  db,
  dbOrderItem,
  error,
  loading,
  updateOrderItem,
}) => {
  return (
    <>
      {loading && <Loader />}
      {error && <Message msg={`Error ${error.statusText}`} bgColor="#dc3545" />}
      {db && dbOrderItem && (
        <StoreCards
          data={db}
          dbOrderItem={dbOrderItem}
          createOrderItem={createOrderItem}
          updateOrderItem={updateOrderItem}
        />
      )}
    </>
  );
};

export default Store;
