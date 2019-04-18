import {
    combineReducers
} from "redux";
import products from '../reducers/index';
import {
    reducer
} from 'react-redux-sweetalert'

export default combineReducers({
    sweetalert: reducer,
    products
});