import React from 'react';
import classes from './CartCard.module.css';
import currency from 'currency-formatter';

const CartCard = ({image,title,description,price, quantity}) => {

    return (
        <div className={classes.CartCard}>
            <div className={classes.CartCard__FlexContent}>
                <div className={classes.CartCard__ImageContainer}>
                    <img src={image} />
                </div>
                <div className={classes.CartCard__FlexText}>
                    <p>{title}</p>
                    <span>{description}</span>
                    <p>{currency.format(price, { code: 'ZAR'})}</p>
                    <p>quantity: {quantity}</p>
                    
                </div>
            </div>
            
            <div>
                <button>Remove</button>
                <button>Checkout</button>
            </div>
        </div>
    );
}

export default CartCard;