import React from 'react';
import classes from './DrawerCard.module.css';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const DrawerCard = ({name}) => {

    return (
        <div className={classes.DrawerCard}>
            <p>{name}</p>
            <ArrowForwardIosIcon />
        </div>
    );
}

export default DrawerCard;