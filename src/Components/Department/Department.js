import React from 'react';
import classes from './Department.module.css';

import { departments } from '../../data';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Button } from '@material-ui/core';

const Department = () => {

    return (
        <div className={classes.Department}>
            <div>
                <button className={classes.Department__Button}>Departments</button>
            </div>

            <div className={classes.Department__List}>
                <div className={classes.Department__ListContainer}>
                    <div className={classes.Department__ListTitle}>
                        {departments.map(dep => (
                            <div className={classes.Department__EachDepart}>
                                <p key={dep.title}>{dep.title}</p>
                                <KeyboardArrowRightIcon className={classes.Department__KeyboardIcon} />
                            </div>
                        ))}
                    </div>
                    {/* <div>
                        <p>Hello</p>
                    </div> */}
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