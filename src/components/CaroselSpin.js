import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cooking from '../app/img/cooking.png'
import food from '../app/img/food on table.png'
import food2 from '../app/img/food.png'
import groupphoto from '../app/img/groupphoto2.png'
import march from '../app/img/march1.png'

const CaroselSpin = () => {
  return (
    <Carousel dynamicHeight infiniteLoop useKeyboardArrows>
      <div>
        <img className='rounded' src={cooking} alt='cooking' />
      </div>
      <div>
        <img className='rounded' src={food} alt='food' />
      </div>
      <div>
        <img className='rounded' src={food2} alt='food 2' />
      </div>
      <div>
        <img className='rounded' src={groupphoto} alt='group photo' />
      </div>
      <div>
        <img className='rounded' src={march} alt='March photo' />
      </div>
    </Carousel>
  );
};

export default CaroselSpin;
