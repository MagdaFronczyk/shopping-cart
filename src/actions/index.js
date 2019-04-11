import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_PRICES,
    DETRACT_PRICE
} from '../constants/action-types'

function getProducts() {
    return fetch("https://api.myjson.com/bins/10fhy0")
        .then(handleErrors)
        .then(res => res.json());
}

export function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsBegin());
        return getProducts()
            .then(json => {
                dispatch(fetchProductsSuccess(json));
                return json;
            })
            .catch(error =>
                dispatch(fetchProductsFailure(error))
            );
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
        products
    }
});

export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: {
        error
    }
});

export const addItemToCart = itemAdded => ({
    type: ADD_TO_CART,
    payload: {
        itemAdded
    }
});

export const removeItemFromCart = itemRemoved => ({
    type: REMOVE_FROM_CART,
    payload: {
        itemRemoved
    }
});

export const addPrices = itemAdded => ({
    type: ADD_PRICES,
    payload: {
        itemAdded
    }
});

export const detractPrice = itemRemoved => ({
    type: DETRACT_PRICE,
    payload: {
        itemRemoved
    }
});