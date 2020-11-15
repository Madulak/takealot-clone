import React from 'react';
import classes from './Price.module.css';

const Price = () => {

    return (
        <div className={classes.Price}>
            <h2>R 39 000.00</h2>
            <p>Free delivery</p>
            <button>Add to Cart</button>
            <button>Add to List</button>
        </div>
    );
}

export default Price;