import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import { helpHttp } from '../helpers/helpHttp';

const OrderItemsContext = createContext();

const OrderItemsProvider = ({ children }) => {
  const [dbProducts, setDbProducts] = useState(null);
  const [dbOrderItem, setDbOrderItem] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let urlProducts = 'http://127.0.0.1:8000/tienda/routerproduct/';
  let urlOrderItems = 'http://127.0.0.1:8000/tienda/routeritem/';

  useEffect(() => {
    const getProducts = () => {
      setLoading(true);
      helpHttp()
        .get(urlProducts)
        .then((res) => {
          if (!res.err) {
            if (res.length === undefined) {
              setDbProducts(null);
            } else {
              setDbProducts(res);
              setError(null);
            }
          } else {
            setDbProducts(null);
            setError(res);
          }
          setLoading(false);
        });
    };

    const getOrderItems = () => {
      helpHttp()
        .get(urlOrderItems)
        .then((res) => {
          //console.log(res);
          if (!res.err) {
            if (res.length === undefined) {
              setDbOrderItem([]);
            } else {
              setDbOrderItem(res);
            }
          } else {
            setDbOrderItem([]);
          }
        });
    };

    getProducts();
    getOrderItems();
  }, [urlProducts, urlOrderItems]);

  const createOrderItem = (data) => {
    //console.log('crear', data);
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };
    helpHttp()
      .post(urlOrderItems, options)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDbOrderItem([...dbOrderItem, res]);
        } else {
          setError(res);
        }
      });
  };

  const updateOrderItem = (data) => {
    //console.log('actualizar', data);
    let endpoint = `${urlOrderItems}${data.id}/`;
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };
    helpHttp()
      .put(endpoint, options)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = dbOrderItem.map((el) =>
            el.id === data.id ? data : el
          );
          //console.log(newData);
          setDbOrderItem(newData);
        } else {
          setError(res);
        }
      });
  };

  const deleteOrderItem = (id) => {
    let endpoint = `${urlOrderItems}${id}`;
    let options = { headers: { 'content-type': 'application/json' } };
    helpHttp()
      .del(endpoint, options)
      .then((res) => {
        if (!res.err) {
          let newData = dbOrderItem.filter((el) => el.id !== id);
          setDbOrderItem(newData);
        } else {
          setError(res);
        }
      });
  };

  const data = {
    dbProducts,
    dbOrderItem,
    error,
    loading,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem,
  };
  return (
    <OrderItemsContext.Provider value={data}>
      {children}
    </OrderItemsContext.Provider>
  );
};

export { OrderItemsProvider };

export default OrderItemsContext;
