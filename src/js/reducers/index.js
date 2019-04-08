import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_PRICES
} from "../constants/action-types";

const initialState = {
    items: [],
    loading: false,
    error: null,
    itemsChosen: [],
    sum: 0
};

export default function productReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case FETCH_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.products
            };

        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        case ADD_TO_CART:
            return {
                ...state,
                itemsChosen: [...state.itemsChosen, action.payload.itemAdded]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                itemsChosen: state.itemsChosen.filter((itemChosen, index, array) => array.findIndex(item => item.id === action.payload.itemRemoved.id) !== index)
            };
        case ADD_PRICES:
            return {
                ...state,
                // sum: state.sum + action.payload.itemAdded.id,
                sum: state.itemsChosen.reduce((sum, curr) => sum + curr.id, 0)
            };
        default:
            return state;
    }
}