//Actions
const GET_PROFILE_CARD = 'GET_PROFILE_CARD';
const GET_BORROW_COUNT = 'GET_BORROW_COUNT';
const GET_PROFILE_LOADING = 'GET_PROFILE_LOAD';
const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';

//Action Creators

const getProfileCard = items => ({
  type: GET_PROFILE_CARD,
  payload: items
});

const getBorrowCount = count => ({
  type: GET_BORROW_COUNT,
  payload: count
});

const getProfileLoading = () => ({
  type: GET_PROFILE_LOADING
});

const getProfileError = error => ({
  type: GET_PROFILE_ERROR
});

export const fetchUserProfile = () => {
  return dispatch => {
    dispatch(getProfileLoading());
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
    });
  };
};
