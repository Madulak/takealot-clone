import React from 'react';
import classes from './Login.module.css';

import Toolbar from '../../Components/Toolbar/Toolbar';
import LoginForm from '../../Components/Auth/Login/Login';
import Blue from '../../Components/UI/Blue/Blue';

const Login = () => {

    return (
        <div className={classes.Login}>
            <Toolbar />
            <Blue />
            <div className={classes.Login__Form}>
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;