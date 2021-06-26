import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHttp';
import Menu from './Menu';
import Store from '../pages/Store';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';

const NavBar = () => {
  const [db, setDb] = useState([]);
  const [dbOrderItem, setDbOrderItem] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let urlProducts = `http://127.0.0.1:8000/products/`;
  let urlOrderItems = 'http://127.0.0.1:8000/order_items/';

  //console.log(dbOrderItem);

  useEffect(() => {
    const getProducts = () => {
      setLoading(true);
      helpHttp()
        .get(urlProducts)
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
    };

    const getOrderItems = () => {
      helpHttp()
        .get(urlOrderItems)
        .then((res) => {
          //console.log(res);
          setDbOrderItem(res);
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
  return (
    <>
      <HashRouter>
        <Menu dbOrderItem={dbOrderItem} />
        <Switch>
          <Route exact path="/">
            <Store
              db={db}
              dbOrderItem={dbOrderItem}
              error={error}
              loading={loading}
              createOrderItem={createOrderItem}
              updateOrderItem={updateOrderItem}
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              db={db}
              dbOrderItem={dbOrderItem}
              updateOrderItem={updateOrderItem}
              deleteOrderItem={deleteOrderItem}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout db={db} dbOrderItem={dbOrderItem} />
          </Route>
          <Route exact path="/login" component={Login} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default NavBar;
