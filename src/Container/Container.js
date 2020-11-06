import React from 'react';
import classes from './Container.module.css';

import Toolbar from '../Components/Toolbar/Toolbar';
import Department from '../Components/Department/Department';

const Container = () => {

    return (
        <div className={classes.Container}>
            <Toolbar />
            <Department />
        </div>
    );
}

export default Container;