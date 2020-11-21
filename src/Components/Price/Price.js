import React from 'react';
import classes from './Price.module.css';

import currency from 'currency-formatter';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const Price = ({price, cart}) => {

    return (
        <div className={classes.Price}>
            <h2>{currency.format(price, { code: 'ZAR'})}</h2>
            <p>Free delivery</p>
            {/* <button></button> */}
            <button onClick={() => cart()} className={classes.Price__AddCart}> <AddIcon /> <ShoppingCartIcon /> Add to Cart</button>
            <button className={classes.Price__AddList}> <FavoriteBorderIcon /> Add to List</button>

        </div>
    );
}

export default Price;