import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  // INJECT_IMPORT_PAGE
	Register,
	Users,
  Home,
} from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* INJECT_ROUTE_PAGE */}
				<Route path="/register" component={ Register } />
				<Route path="/users" component={ Users } />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
