import Axios from 'axios';

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';


const baseUrl = 'http://localhost:8080';
const loginUrl = baseUrl + '/login';
const signupUrl = baseUrl + '/signup';

export const login = (data) => {

    return async dispatch => {
        let response;
        try {
            response = await Axios.post(loginUrl, data)
            console.log(response);
        } catch (error) {
            console.log(error);
            throw error;
        }

        dispatch({type: LOGIN, user: response.data})
    }
}

export const signup = (data) => {

    return async dispatch => {
        let response;
        try {
            response = await Axios.post(signupUrl, data)
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        dispatch({type: SIGNUP })
    }
}