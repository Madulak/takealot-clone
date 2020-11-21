import React, { useState, useEffect} from 'react';
import classes from './CartRoute.module.css';

import Container from '../../Container/Container';
import CartCard from '../../Components/UI/CartCard/CartCard';
import FullPrice from '../../Components/UI/FullPrice/FullPrice';

import { useSelector } from 'react-redux';

// import { u } from 'react-router-dom';

const CartRoute = (props) => {

    const cart = useSelector(state => state.user.cart);
    
    // console.log();
    return (
        <Container>
            
            <div className={classes.CartRoute}>
                
                <div className={classes.CartRoute__CardSection}>
                    {cart.map(el => (
                        <CartCard key={el.title}
                            id={el._id}
                            image={el.imgUrl}
                            title={el.title}
                            description={el.description}
                            price={el.price}
                            quantity={el.quantity}
                        />
                    ))}
                </div>

                <div className={classes.CartRoute__FullPrice}>
                    <FullPrice />
                </div>
            </div>
        </Container>
    );
}

export default CartRoute;