import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  /* PLOP_ROUTE_IMPORT */
  Home,
} from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* PLOP_INJECT_ROUTE */}
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
