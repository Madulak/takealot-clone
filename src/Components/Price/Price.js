import React from 'react';
import classes from './Price.module.css';

import currency from 'currency-formatter';

const Price = ({price}) => {

    return (
        <div className={classes.Price}>
            <h2>{currency.format(price, { code: 'ZAR'})}</h2>
            <p>Free delivery</p>
            <button>Add to Cart</button>
            <button>Add to List</button>
        </div>
    );
}

export default Price;