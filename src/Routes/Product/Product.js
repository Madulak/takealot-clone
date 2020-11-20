import React, { useEffect } from 'react';
import classes from './Product.module.css';

import Toolbar from '../../Components/Toolbar/Toolbar';
import Blue from '../../Components/UI/Blue/Blue';
import Description from '../../Components/Description/Description';
import Price from '../../Components/Price/Price';

import * as productActions from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Product = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const product = useSelector(state => state.user.product);

    useEffect(() => {
        dispatch(productActions.get_single_product(id))
    },[])
    
    return (
        <div className={classes.Product}>
            <Toolbar />
            <Blue />
            <div className={classes.Product__Container}>
                <Description 
                    title={product.title} 
                    description={product.description} 
                    image={product.imgUrl}
                    brand={product.brand}
                    features={product.features}
                    price={product.price}

                />
                <Price price={product.price} />
            </div>
        </div>
    );
}

export default Product;