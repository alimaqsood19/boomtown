//Responsible for handling logic, presentation will be in the items.js file
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from './items.js';
import Loader from '../../components/Loader';
import { connect } from 'react-redux';
import { fetchItemsAndUsers } from '../../redux/modules/items';

class ItemsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchItemsAndUsers());
  }

  render() {
    const loading = this.props.isLoading;
    return loading ? <Loader /> : <Items data={this.props.itemsData} />;
  }
}

ItemsContainer.propTypes = {};

const mapStateToProps = state => ({
  itemsData: state.items.itemsData,
  isLoading: state.items.isLoading
});

export default connect(mapStateToProps)(ItemsContainer);
