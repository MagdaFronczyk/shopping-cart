import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ADD_TO_CART,
    REMOVE_FROM_CART
} from "../constants/action-types";
import loveUalaskaT from '../insteadOfniceEndpoint'

const initialState = {
    items: loveUalaskaT,
    loading: false,
    error: null,
    itemsChosen: [],
    inventory: [{
        id: 0,
        count: 12
    }, {
        id: 1,
        count: 7
    }, {
        id: 2,
        count: 11
    }, {
        id: 3,
        count: 13
    }, {
        id: 4,
        count: 16
    }, {
        id: 5,
        count: 4
    }, {
        id: 6,
        count: 18
    }, {
        id: 7,
        count: 15
    }, {
        id: 8,
        count: 19
    }]
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
        default:
            return state;
    }
}