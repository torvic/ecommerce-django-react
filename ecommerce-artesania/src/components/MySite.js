import { Switch, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Message from './Message';
import Loader from './Loader';
import Header from './Header';
import Store from '../pages/Store';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Footer from './Footer';
import OrderItemsContext from '../context/OrderItemsContext';
import { useContext } from 'react';

const MySite = () => {
  const { dbProducts, error, loading } = useContext(OrderItemsContext);
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            {loading && <Loader />}
            {error && (
              <Message msg={`Error ${error.statusText}`} bgColor="#dc3545" />
            )}
            {dbProducts && <Store />}
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
};

export default MySite;
