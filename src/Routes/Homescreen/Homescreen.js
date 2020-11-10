import React from 'react';
import classes from './Homescreen.module.css';
import Container from '../../Container/Container';
import HorizontalScroll from '../../Components/HorizScroll/HorizScroll';
import Advert from '../../Components/Advert/Advert';

const Homescreen = () => {

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
                    <h3>Pass </h3>
                        <HorizontalScroll />
                </div>
            </div>
            
        </Container>
    );
}

export default Homescreen;