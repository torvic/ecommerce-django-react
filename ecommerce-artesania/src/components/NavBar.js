import { Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Menu from "./Menu";
import Store from "../pages/Store";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";

const NavBar = () => {
  return (
    <>
      <HashRouter>
        <Menu />
        <Switch>
					<Route exact path="/" >
						<Store />
					</Route>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default NavBar;
