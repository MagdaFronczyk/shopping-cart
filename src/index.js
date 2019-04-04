import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./components/productsList/ProductList";
import { Provider } from "react-redux";
import store from './js/store/index'

function App() {
    return (
        <div className="App">
            <ProductList />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);