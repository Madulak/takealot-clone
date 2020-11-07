import React from 'react';
import classes from './Homescreen.module.css';
import Container from '../../Container/Container';

const Homescreen = () => {

    return (
        <Container>
            <div>
                <div className={classes.Homescreen}>
                    <div className={classes.Homescreen__Empty}>

                    </div>
                    <div className={classes.Homescreen__Advert}>
                        <h1>Home Screen</h1>
                    </div>
                </div>
                <div>
                    <h3>Pass </h3>
                </div>
            </div>
            
        </Container>
    );
}

export default Homescreen;