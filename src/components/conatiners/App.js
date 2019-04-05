import React from 'react';
import ProductList from '../productsList/ProductList';
import Cart from '../cart/Cart';

export default function App() {
  return (
    <div className="App">
      <ProductList />
      <Cart />
    </div>
  );
}