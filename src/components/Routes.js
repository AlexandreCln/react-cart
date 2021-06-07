import { Switch, Route } from "react-router-dom";
import ProductList from './catalog/ProductList';
import CartRecap from './cart/CartRecap';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <ProductList />
      </Route>
      <Route exact path="/mon-panier">
        <CartRecap />
      </Route>
    </Switch>
  );
}
