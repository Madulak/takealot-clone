import React from 'react';
import classes from './Toolbar.module.css';
import logo from './takealot-2156-1120.jpg';


import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Toolbar = () => {

    const cart = useSelector(state => state.user.cart);

    return (
        <div className={classes.Toolbar}>
            <div className={classes.Toolbar__LogoContainer}>
                <NavLink to='/'><img src={logo} alt='logo' /></NavLink>
                <div className={classes.Toolbar__HelpContainer}>
                    <p> help</p>
                    <p> Sell on Takealot</p>
                </div>
            </div>
            
            <div className={classes.Toolbar__ContentContainer}>
                
                <div className={classes.Toolbar__AuthContainer}>
                    <NavLink to='/login'> <p className={classes.Toolbar__Link}> Login</p></NavLink>
                    <NavLink to='/signup'><p className={classes.Toolbar__Link}> Register</p></NavLink>
                    <p className={classes.Toolbar__Link}> Orders</p>
                    <p > My Account</p>
                    <div className={classes.Toolbar__FavContainer}>
                        <FavoriteIcon className={classes.Toolbar__Like} />
                    </div>
                    <div className={classes.Toolbar__CartContainer}>
                        <ShoppingCartIcon className={classes.Toolbar__CartIcon} />
                        <span>{cart.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;