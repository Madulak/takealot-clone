import React, { useEffect, useState } from 'react';
import classes from './Login.module.css';

import * as loginActions from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const isAuth = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuth) {
            history.push('/')
        }
    },[isAuth, history])

    const LoginHandler = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        }
        dispatch(loginActions.login(data))
        setEmail('');
        setPassword('');
        
    }

    return (
        <form onSubmit={LoginHandler} className={classes.Login}>
            <h4>Admin Signup</h4>
           
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type='email' />
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type='password' />
            
            <button type='submit' >Login</button>
        </form>
    );
}

export default Login;