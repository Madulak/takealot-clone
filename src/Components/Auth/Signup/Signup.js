import React, { useState } from 'react';
import classes from './Signup.module.css';

import * as signupActions from '../../../store/actions';
import { useDispatch } from 'react-redux';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pass2, setPass2] = useState('');
    const dispatch = useDispatch();

    const signupHandler = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            email: email,
            password: password,
        }
        dispatch(signupActions.signup(data));
        setEmail('');
        setUsername('');
        setPassword('');
        setPass2('');
    }
    
    return (
        <form onSubmit={signupHandler} className={classes.Signup}>
            <h4>Signup</h4>
            <label>username</label>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type='email' />
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type='password' />
            <label>Re-type Password</label>
            <input value={pass2} onChange={e => setPass2(e.target.value)} type='password' />
            <button type='submit'>Signup</button>
        </form>
    );
}

export default Signup;