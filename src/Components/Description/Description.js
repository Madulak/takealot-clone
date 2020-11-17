import React from 'react';
import classes from './Description.module.css';

const Description = ({image, description, title, brand, features}) => {

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
            </div>
        </div>
    );
}

export default Description;