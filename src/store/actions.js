import Axios from 'axios';

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const GET_COMPUTERS = 'GET_COMPUTERS';
export const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';


const baseUrl = 'http://localhost:8080';
const loginUrl = baseUrl + '/login';
const signupUrl = baseUrl + '/signup';
const computerUrl = baseUrl + '/computers';
const singleUrl = baseUrl + '/product/'

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

export const get_computers = () => {

    return async dispatch => {

        let response;
        try {
            response = await Axios.get(computerUrl);
            console.log(response);
        } catch (error) {
            console.log(error);
            throw error;
        }

        dispatch({type: GET_COMPUTERS, computers: response.data.data})
    }
}

export const get_single_product = (id) => {

    return async dispatch => {
        let response;
        try {
            response = await Axios.get(singleUrl+id);
            console.log(response);
        } catch (error) {
            console.log(error);
            throw error;
        }
        dispatch({type: GET_SINGLE_PRODUCT, product: response.data.data})
    }
}