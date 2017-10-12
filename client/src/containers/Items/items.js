//Deals with all the presentation, the layout and display
import React from 'react';
import Proptypes from 'prop-types';
import ItemCardList from '../../components/ItemCardList';
import './styles.css';

const Items = ({ data }) => {
  return (
    <div>
      <ItemCardList data={data} />
    </div>
  );
};

Items.propTypes = {};

export default Items;
