import React from 'react';
import classes from './DrawerCard.module.css';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const DrawerCard = ({name, onClick}) => {

    return (
        <div onClick={onClick} className={classes.DrawerCard}>
            <p>{name}</p>
            <ArrowForwardIosIcon />
        </div>
    );
}

export default DrawerCard;