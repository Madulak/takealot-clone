import React, {  Fragment, useEffect, useState } from 'react';
import classes from './Department.module.css';

import { departments } from '../../data';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import { Button } from '@material-ui/core';

import Select from 'react-select';

const Department = () => {

    const [departName, setDepartName] = useState('');
    const [arr, setArr] = useState({});

    const opt = [ ];
     departments.forEach(el => (
        opt.push(el)
    ))
    

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
                                <p className={classes.Department__Title}>{dep.title}</p>
                                <KeyboardArrowRightIcon size={11} className={classes.Department__KeyboardIcon} />
                            </div>
                        ))}
                    </div>
                    {departName !== '' && 
                        <Fragment>
                            <div  className={classes.Department__HoverContainer}>
                                <h3 >{arr.title}</h3>
                                {/* {console.log(arr.subtitle)} */}
                                {arr.subtitle && arr?.subtitle.map(el => (
                                    <div className={classes.Department__Details} key={el?.subtitle}>
                                        <h4 className={classes.Department__CategoryHeader}>{el?.subtitle}</h4>
                                        <div>
                                            {el?.list.map(li => (
                                                <div>
                                                    <p className={classes.Department__NameTitle} key={li}>{li}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={classes.Department__Featured}>
                                <h4>{arr.features?.title}</h4>
                                { arr.features?.list.map(el => (
                                    <p className={classes.Department__NameTitle} key={el}>{el}</p>
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
                     {/* <Select placeholder={'All Departments'} className={classes.Department__Dropdown} options={opt} /> */}
                     <select >
                         <option>All Departments</option>
                         <option>Automotive & DIY</option>
                     </select>
                    <SearchIcon className={classes.Department__Search} />
                </div>
                {/* <br /> */}
                <div className={classes.Department__SaleButttons}>
                    <span>Exclusive To Takealot</span>
                    <span>Clearance Store</span>
                    <span>Fasion Outlet</span>
                    <span>Christmas</span>
                    <span>Blue Dot CountDowns</span>
                    <span>Brand Stores</span>
                </div>
            </div>

        </div>
    );
}

export default Department;