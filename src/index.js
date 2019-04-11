import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from './js/store/index'
import App from './components/conatiners/App'

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);