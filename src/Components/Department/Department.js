import React, {  Fragment, useEffect, useState } from 'react';
import classes from './Department.module.css';

import { departments } from '../../data';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import { Button } from '@material-ui/core';

const Department = () => {

    const [departName, setDepartName] = useState('');
    const [arr, setArr] = useState({});

    useEffect(() => {
        
        if (departName !== '') {
            // find = ;
            setArr(departments.find(el => el.title === departName))
        } else {
            setArr({});
            // setDepartName('')
            
        }

    },[departName])

    // console.log(departName);
    // console.log('[Arr] ', arr);
    // console.log('[SUBTITLE] ',arr?.subtitle)

    return (
        <div className={classes.Department}>
            <div>
                <button className={classes.Department__Button}>Departments</button>
            </div>

            <div className={classes.Department__List} onMouseLeave={() => setDepartName('')}>
                <div className={classes.Department__ListContainer}>
                    <div className={classes.Department__ListTitle}>
                        {departments.map(dep => (
                            <div key={dep.title} onMouseOver={() => setDepartName(dep.title)} className={classes.Department__EachDepart}>
                                <p >{dep.title}</p>
                                <KeyboardArrowRightIcon className={classes.Department__KeyboardIcon} />
                            </div>
                        ))}
                    </div>
                    {departName !== '' && 
                        <Fragment>
                            <div  className={classes.Department__HoverContainer}>
                                <h3 >{arr.title}</h3>
                                {/* {console.log(arr.subtitle)} */}
                                {arr.subtitle && arr?.subtitle.map(el => (
                                    <div key={el?.subtitle}>
                                    <h4>{el?.subtitle}</h4>
                                    <div>
                                        {el?.list.map(li => (
                                            <p key={li}>{li}</p>
                                        ))}
                                    </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{backgroundColor: 'gray'}}>
                                <h3>{arr.features?.title}</h3>
                                { arr.features?.list.map(el => (
                                    <p key={el}>{el}</p>
                                ))}
                                {/* {console.log(arr.features?.title)} */}
                            </div>
                        </Fragment>
                    }
                    
                </div>
                
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className={classes.Department__SearchContainer}>
                    <input placeholder='Search for products, brands...' />
                    <select>
                        <option>All Department</option>
                    </select>
                    <SearchIcon className={classes.Department__Search} />
                </div>
                {/* <br /> */}
                <div >
                    <button>Exclusive To Takealot</button>
                    <button>Clearance Store</button>
                    <button>Fasion Outlet</button>
                    <button>Christmas</button>
                    <button>Blue Dot CountDowns</button>
                    <button>Brand Stores</button>
                </div>
            </div>

        </div>
    );
}

export default Department;