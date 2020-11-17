import { GET_COMPUTERS, LOGIN, GET_SINGLE_PRODUCT } from './actions';

const initialState = {
    user: null,
    cart: [],
    computers: [],
    product: {}
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.user
            }

        case GET_COMPUTERS:
            return {
                ...state,
                computers: action.computers
            }
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.product
            }

        default:
            return state;
    }
}

export default reducer;