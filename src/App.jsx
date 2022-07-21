import * as React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import PageNotFound from "./views/PageNotFound";
import ProductsPage from "./views/ProductsPage";
import AddProduct from "./views/AddProduct";

export default function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductsPage />
        </Route>

        <Route exact path="/add-product">
          <AddProduct />
        </Route>
      
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
