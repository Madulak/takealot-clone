import React from 'react';
import Carousel from 'react-elastic-carousel';
import  './HorizScroll.css';
import Cards from '../UI/Card/Card';
import currency from 'currency-formatter';
import { NavLink } from 'react-router-dom';

import logo from './lead-img-dell-xps-15-17-removebg-preview.png';
import { Card, CardContent } from '@material-ui/core';

 
const HorizScroll = ({computers}) => {
  
    return (
      <div className={'HorizScroll'}> 
          <Carousel pagination={false} itemsToShow={3}>
            {computers.map(item => (
                // <div key={item.id}>{item.title}</div>
                // <Cards key={item.id} >
                    <NavLink key={item._id} to={'/product/'+item._id}>
                      <Card  className={'CardContainer'}>
                        <CardContent>
                          <img className='HorizScroll__Image' src={item.imgUrl} />
                          <p>{item.title}</p>
                          <p>{currency.format(item.price, { code: 'ZAR'})}</p>
                        </CardContent>
                      </Card>
                    </NavLink>
                // </Cards>
            ))}
          </Carousel>
      </div>
    )
  
}

export default HorizScroll;