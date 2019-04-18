import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from './store/index'
import App from './components/conatiners/App';
import ReduxSweetAlert, { swal } from 'react-redux-sweetalert'; // eslint-disable-line

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
        <ReduxSweetAlert store={store} />
    </Provider>,
    rootElement
);