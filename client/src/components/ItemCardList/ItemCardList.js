import React from 'react';
import Masonry from 'react-masonry-component';

import './styles.css';
import ItemCard from '../ItemCard';

const ItemCardList = ({ data }) => {
  return (
    <Masonry>
      <ItemCard data={data} />
    </Masonry>
  );
};

export default ItemCardList;
