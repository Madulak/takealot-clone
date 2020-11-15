import React from 'react';
import classes from './Signup.module.css';

import Toolbar from '../../Components/Toolbar/Toolbar';
import SignupForm from '../../Components/Auth/Signup/Signup';
import Blue from '../../Components/UI/Blue/Blue';

const Signup = () => {

    return (
        <div className={classes.Signup}>
            <Toolbar />
            <Blue />
            <div className={classes.Signup__FormContainer}>
                <SignupForm />
            </div>
            
        </div>

    );
}

export default Signup;