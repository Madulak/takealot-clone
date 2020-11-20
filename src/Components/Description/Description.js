import React from 'react';
import classes from './Description.module.css';

import currency from 'currency-formatter';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Description = ({image, description, title, brand, features, price}) => {

    return (
        <div className={classes.Description}>
            <div className={classes.Description__ImageContainer}>
                <img className={classes.Description__Image} src={image} alt='detailpic' />
            </div>
            <div className={classes.Description__DescripContainer}>
                <div>
                    <h3>{description}</h3>
                    <p>{brand}</p>
                    <h4>{title}</h4>
                </div>
                <div>
                    <h4>In Stock</h4>
                </div>
                <div>
                    <ul>
                        <li>Free Delivery</li>
                    </ul>
                </div>
                
                <div className={classes.Description__Price}>
                    <h2>{currency.format(price, { code: 'ZAR'})}</h2>
                    <p>Free delivery</p>
                    {/* <button></button> */}
                    <Button className={classes.Price__AddCart}> <AddIcon /> <ShoppingCartIcon /> Add to Cart</Button><br />
                    <Button className={classes.Price__AddList}> <FavoriteBorderIcon /> Add to List</Button>

                </div>
            </div>
        </div>
    );
}

export default Description;