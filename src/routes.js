import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  /* PLOP_ROUTE_IMPORT */
	List,
	Register,
	Login,
  Home,
} from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* PLOP_INJECT_ROUTE */}
				<Route exact path="/list" component={ List } />
				<Route exact path="/register" component={ Register } />
				<Route exact path="/login" component={ Login } />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
