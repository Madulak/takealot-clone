import React from 'react';
import classes from './Product.module.css';

import Toolbar from '../../Components/Toolbar/Toolbar';
import Blue from '../../Components/UI/Blue/Blue';
import Description from '../../Components/Description/Description';
import Price from '../../Components/Price/Price';

const Product = () => {
    
    return (
        <div className={classes.Product}>
            <Toolbar />
            <Blue />
            <div className={classes.Product__Container}>
                <Description />
                <Price />
            </div>
        </div>
    );
}

export default Product;