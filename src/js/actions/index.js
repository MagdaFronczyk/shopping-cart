import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from '../constants/action-types'

function getProducts() {
    return fetch("https://jsonplaceholder.typicode.com/photos")
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

// Handle HTTP errors since fetch won't.
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