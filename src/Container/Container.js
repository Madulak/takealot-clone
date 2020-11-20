import React, { useState, useRef, useEffect } from 'react';
import './Container.module.css';

import Toolbar from '../Components/Toolbar/Toolbar';
import Department from '../Components/Department/Department';
import DrawerCard from '../Components/UI/DrawerCard/DrawerCard';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { departments } from '../data';


const Container = ({children}) => {

    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        setWidth(elementRef.current.getBoundingClientRect().width);
      }, []); 

    const drawerHandler = () => {
        setOpen(state => !state);
    }
    

    return (
        <div ref={elementRef} className={'Container'}>
            <SwipeableDrawer anchor='left' open={open} onClose={drawerHandler} >
                {departments.map(el => (
                    <DrawerCard key={el.title} name={el.title} />
                ))}
            </SwipeableDrawer>
            <Toolbar drawer={drawerHandler} />
            <Department />
            {children}
            {/* {width} */}
        </div>
    );
}

export default Container;