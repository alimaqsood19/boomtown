import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './profile.js';
import Loader from '../../components/Loader';

class ProfileContainer extends Component {
  constructor() {
    super();

    this.state = {
      userData: [],
      userBorrowed: 0,
      isLoading: false
    };
  }
  componentDidMount() {
    //Grabs params from this.state
    console.log(this.props.match.params.id);

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
      //Creates array out of all items which have a .borrower property other than undefined
      const itemsBorrowed = dataArray.filter(item => {
        if (item.borrower) {
          return item;
        }
      });
      //Checks out of all items that have a .borrower prop, what items current user has in possesion
      const userBorrowing = itemsBorrowed.filter(item => {
        if (item.borrower.id === this.props.match.params.id) {
          return item;
        }
      });
      //Grabs count of how many items user actually owns
      const userArray = dataArray.filter(item => {
        return item.itemowner.id === this.props.match.params.id;
      });
      console.log('count', userArray.length);
      console.log('itemsBorrowed', itemsBorrowed);
      console.log('userBorrowing', userBorrowing);
      console.log('dataArray', dataArray);
      console.log(this.state.userData);

      this.setState({
        userData: userArray,
        userBorrowed: userBorrowing.length,
        isLoading: false
      });
      console.log('Hello', this.state.userData);
    });
  }

  render() {
    const loading = this.state.isLoading;
    return loading ? (
      <Loader />
    ) : (
      <Profile
        data={this.state.userData}
        borrowData={this.state.userBorrowed}
      />
    );
  }
}

export default ProfileContainer;
