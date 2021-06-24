import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import Menu from "./Menu";
import Store from "../pages/Store";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";

const NavBar = () => {

	let url = "http://127.0.0.1:8000/order_items/";

  const createOrderItem = (data) => {
    console.log("crear", data);
		let options={
			body:data,
			headers:{"content-type":"application/json"},
		}
		helpHttp().post(url, options).then(res => {
			console.log(res);
		})
  };

  const updateOrderItem = (data) => {
		console.log("actualizar", data);
		/* let endpoint = `${url}${data.id}/`
		let options={
			body:data,
			headers:{"content-type":"application/json"},
		}
		helpHttp().put(endpoint, options).then(res => {
			console.log(res);
		}) */

	}; 

  const deleteOrderItem = (id) => {};
  return (
    <>
      <HashRouter>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Store
              createOrderItem={createOrderItem}
            />
          </Route>
          <Route exact path="/cart">
						<Cart updateOrderItem={updateOrderItem} />
					</Route>
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default NavBar;
