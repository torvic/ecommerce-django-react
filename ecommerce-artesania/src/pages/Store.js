import CardProduct from "../components/CardProduct";
import { helpHttp } from "../helpers/helpHttp";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import StoreCards from "../components/StoreCards";
import Message from "../components/Message";

const Store = ({ createOrderItem }) => {
  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let endpoint = `http://127.0.0.1:8000/products/`;

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(endpoint)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [endpoint]);


  return (
    <>
      {loading && <Loader />}
      {error && <Message msg={`Error ${error.statusText}`} bgColor="#dc3545" />}
      {db && (
        <StoreCards
          data={db}
          createOrderItem={createOrderItem}
        />
      )}
    </>
  );
};

export default Store;
