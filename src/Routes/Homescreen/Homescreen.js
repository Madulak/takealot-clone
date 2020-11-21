import React, { useEffect } from 'react';
import classes from './Homescreen.module.css';
import Container from '../../Container/Container';
import HorizontalScroll from '../../Components/HorizScroll/HorizScroll';
import Advert from '../../Components/Advert/Advert';

import * as productActions from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Homescreen = () => {

    const dispatch = useDispatch();
    const computers = useSelector(state => state.user.computers);

    useEffect(() => {
        dispatch(productActions.get_computers());
    },[dispatch])


    return (
        <Container>
            <div>
                <div className={classes.Homescreen}>
                    <div className={classes.Homescreen__Empty}>

                    </div>
                    <div className={classes.Homescreen__Advert}>
                        <Advert />
                    </div>
                    <div className={classes.Homescreen__Empty2}>

                    </div>
                </div>
                <div className={classes.Homescreen__Product}>
                    <h3>Laptop </h3>
                        <HorizontalScroll computers={computers} />
                </div>
            </div>
            
        </Container>
    );
}

export default Homescreen;