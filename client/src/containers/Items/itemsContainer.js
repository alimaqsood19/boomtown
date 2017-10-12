//Responsible for handling logic, presentation will be in the items.js file
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from './items.js';
import Loader from '../../components/Loader';

class ItemsContainer extends Component {
  constructor() {
    super();

    this.state = {
      itemsData: [],
      isLoading: false
    };
  }

  componentDidMount() {
    let p1 = 'http://localhost:3001/items';
    let p2 = 'http://localhost:3001/users';
    const urls = [p1, p2];

    Promise.all(
      urls.map(url => fetch(url).then(resp => resp.json()))
    ).then(texts => {
      const [items, users] = texts;
      let dataArray = items.map(item => {
        const newitemOwner = users.find(user => item.itemowner === user.id);
        const borrowOwner = users.find(user => item.borrower === user.id);
        item.itemowner = newitemOwner;
        item.borrower = borrowOwner;
        return item;
      });
      this.setState({ itemsData: dataArray, isLoading: false });
      console.log(dataArray);
    });
  }

  render() {
    const loading = this.state.isLoading;
    return loading ? <Loader /> : <Items data={this.state.itemsData} />;
  }
}

ItemsContainer.propTypes = {};

export default ItemsContainer;
