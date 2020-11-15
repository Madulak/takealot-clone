import React from 'react';
import Carousel from 'react-elastic-carousel';
import  './HorizScroll.css';
import Cards from '../UI/Card/Card';

import logo from './lead-img-dell-xps-15-17-removebg-preview.png';
import { Card, CardContent } from '@material-ui/core';
 
const HorizScroll = () => {
  const state = {
    items: [
      {id: 1, title: 'item #1', },
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
  }
 
  
    const { items } = state;
    return (
      <div className={'HorizScroll'}> 
          <Carousel pagination={false} itemsToShow={3}>
            {items.map(item => (
                // <div key={item.id}>{item.title}</div>
                // <Cards key={item.id} >
                    // <NavLink >
                      <Card className={'CardContainer'}>
                        <CardContent>
                          <img className='HorizScroll__Image' src={logo} />
                          <p>Xps 15 the best laptop, high speed no throtling</p>
                          <p>R 39 000.00</p>
                        </CardContent>
                      </Card>
                    // </NavLink>
                // </Cards>
            ))}
          </Carousel>
      </div>
    )
  
}

export default HorizScroll;