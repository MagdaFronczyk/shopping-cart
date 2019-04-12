import React from 'react';
import ProductList from '../productsList/ProductList';
import Cart from '../cart/Cart';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <Route path="/" component={ProductList} />
        </Switch>
      </div>
    </HashRouter>
  );
}