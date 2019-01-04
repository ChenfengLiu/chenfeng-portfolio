import React from 'react';
import Banner from '../lib/banner/Banner';

export const NotFound = () => (
  <div>
    <Banner title={'Oops! Page Not Found.'}
      subTitle={'You have reach the edge of the universe.'}
      showButton={true}
      buttonText={'Back To Home'}
      buttonLink={''}
      image={'404NotFound.jpg'}/>
  </div>
);
