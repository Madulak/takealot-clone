import { LOGIN } from './actions';

const initialState = {
    user: null,
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer;