import React from 'react';
import './Container.module.css';

import Toolbar from '../Components/Toolbar/Toolbar';
import Department from '../Components/Department/Department';

const Container = ({children}) => {

    return (
        <div className={'Container'}>
            <Toolbar />
            <Department />
            {children}
        </div>
    );
}

export default Container;