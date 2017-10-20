import React from 'react';
import Masonry from 'react-masonry-component';

import './styles.css';
import ItemCard from '../ItemCard';

const ItemCardList = ({ data }) => {
  return (
    <Masonry className="itemCardList">
      {data.map(listValue => {
        return <ItemCard key={data.id} listValue={listValue} />;
      })}
    </Masonry>
  );
};

export default ItemCardList;
