import * as React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import PageNotFound from "./views/PageNotFound";
import ProductsPage from "./views/ProductsPage";

export default function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductsPage />
        </Route>
      
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
