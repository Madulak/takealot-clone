import React from 'react';
import classes from './FullPrice.module.css';

const FullPrice = () => {

    return (
        <div className={classes.FullPrice}>
            <h5>Cart Summary</h5>
            <div className={classes.FullPrice__TotalPriceContainer}>
                <p>Total</p>
                <p>Price</p>
            </div>
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default FullPrice;