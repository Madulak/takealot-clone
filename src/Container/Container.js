import React, { useState, useRef, useEffect } from 'react';
import './Container.module.css';

import Toolbar from '../Components/Toolbar/Toolbar';
import Department from '../Components/Department/Department';
import Blue from '../Components/UI/Blue/Blue';
import { useLocation } from 'react-router-dom';

const Container = ({children}) => {

    
    const [width, setWidth] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        setWidth(elementRef.current.getBoundingClientRect().width);
        
      }, []); 

      let location = useLocation();
    

    return (
        <div ref={elementRef} className={'Container'}>
            
            <Toolbar />
            {location.pathname === '/cart' ? <Blue /> : <Department />}
            
            {children}
            {/* {width} */}
        </div>
    );
}

export default Container;