import * as React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import PageNotFound from "./views/PageNotFound";
import ProductsList from "./views/ProductsList";

export default function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductsList />
        </Route>
      
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
