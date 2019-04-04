import {
    fetchProductsPending,
    fetchProductsSuccess,
    fetchProductsError
} from './actions/index';

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('https://exampleapi.com/products')
            .then(res => res.json())
            .then(res => {
                    if (res.error) {
                        throw (res.error);
                    }
                    dispatch(fetchProductsSuccess(res.products);
                        return res.products;
                    })
                .catch(error => {
                    dispatch(fetchProductsError(error));
                })
            }
    }