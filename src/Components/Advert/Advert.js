import React from 'react';
import './Advert.css';
import Carousel from 'react-elastic-carousel';
import AdvertCard from '../UI/AdvertCard/AdvertCard';
import logo from './new_shop_local_lp_carousel_1292x300_2020_1.png';

const Advert = () => {

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
              <Carousel  itemsToShow={1}>
                {items.map(item => (
                    // <div key={item.id}>{item.title}</div>
                    <AdvertCard key={item.id} >
                        {item.title}
                        <img className='HorizScroll__Image' src={logo} />
                    </AdvertCard>
                ))}
              </Carousel>
          </div>
        )
}

export default Advert;