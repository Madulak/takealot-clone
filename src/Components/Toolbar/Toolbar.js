import React, { useState } from 'react';
import classes from './Toolbar.module.css';
import logo from './takealot-2156-1120.jpg';


import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
// import { IconButton } from '@material-ui/core';
import DrawerCard from '../UI/DrawerCard/DrawerCard';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { departments } from '../../data';

const Toolbar = () => {

    const cart = useSelector(state => state.user.cart);

    const [open, setOpen] = useState(false);
    const drawerHandler = () => {
            setOpen(state => !state);
    }

    return (
        <div className={classes.Toolbar}>
            <SwipeableDrawer anchor='left' open={open} onClose={drawerHandler} >
                {departments.map(el => (
                    <DrawerCard onClick={drawerHandler} key={el.title} name={el.title} />
                ))}
            </SwipeableDrawer>
            <div className={classes.Toolbar__LogoContainer}>
                <div className={classes.Toolbar__MenuIcon} onClick={drawerHandler}>
                    <MenuIcon  />
                </div>
                <NavLink to='/'><img src={logo} alt='logo' /></NavLink>
                <div className={classes.Toolbar__HelpContainer}>
                    <p> help</p>
                    <p> Sell on Takealot</p>
                </div>
                <div className={classes.Toolbar__SearchIcon}>
                    <SearchIcon  />
                </div>
            </div>
            
            <div className={classes.Toolbar__ContentContainer}>
                
                <div className={classes.Toolbar__AuthContainer}>
                    <NavLink to='/login'> <p className={classes.Toolbar__Link}> Login</p></NavLink>
                    <NavLink to='/signup'><p className={classes.Toolbar__Link}> Register</p></NavLink>
                    <p className={classes.Toolbar__Link}> Orders</p>
                    <p className={classes.Toolbar__MyAccount} > My Account</p>
                    <div className={classes.Toolbar__FavContainer}>
                        <FavoriteIcon className={classes.Toolbar__Like} />
                    </div>
                    {/* <div > */}
                        <NavLink to='/cart' className={classes.Toolbar__CartContainer}>
                            <ShoppingCartIcon className={classes.Toolbar__CartIcon} />
                            <span>{cart.length}</span>
                        </NavLink>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}

export default Toolbar;