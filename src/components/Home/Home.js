import React from 'react';
import Slide from './Slide';
import Notification from './Notification';
import ListCategory from './ListCategory';
import NewProduct from './NewProduct';
import Cheap from './Cheap';
import ListCheap from './ListCheap';
import ListCheap2 from './ListCheap2';
import FeelingGood from './FeelingGood';
import Instagram from './Instagram';

const Home = () => {
  return (
    <div>
      <Notification />
      <Slide />
      <ListCategory />
      <NewProduct />
      <Cheap />
      <ListCheap />
      <ListCheap2 />
      <FeelingGood />
      <Instagram />
    </div>
  );
};

export default Home;
