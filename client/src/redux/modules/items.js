//Actions
const GET_ITEMS = 'GET_ITEMS';
const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

//ACTION CREATORS
const getItems = items => ({
  type: GET_ITEMS,
  payload: items
});

const getItemsLoading = () => ({
  type: GET_ITEMS_LOADING
});

const getItemsError = error => ({
  type: GET_ITEMS_ERROR,
  payload: error
});

export const fetchItemsAndUsers = () => dispatch => {
  dispatch(getItemsLoading());

  let p1 = 'http://localhost:3001/items';
  let p2 = 'http://localhost:3001/users';
  const urls = [p1, p2];

  Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
    .then(texts => {
      const [items, users] = texts;
      let dataArray = items.map(item => {
        const newitemOwner = users.find(user => item.itemowner === user.id);
        const borrowOwner = users.find(user => item.borrower === user.id);
        item.itemowner = newitemOwner;
        item.borrower = borrowOwner;
        return item;
      });
      dispatch(getItems(dataArray));
    })
    .catch(err => {
      dispatch(getItemsError(err));
    });
};

//REDUCERS

export default (
  state = { itemsData: [], isLoading: false, error: '' },
  action
) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        itemsData: action.payload,
        isLoading: false,
        error: ''
      };
    case GET_ITEMS_LOADING:
      return { ...state, isLoading: true, error: '' };
    case GET_ITEMS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
