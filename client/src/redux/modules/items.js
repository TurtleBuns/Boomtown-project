//Action creators

const GET_ITEMS = 'GET_ITEMS';
const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

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
  dispatch(getItemsLoading()); //literally dispatching action creator into redux world

  let p1 = 'http://localhost:3001/items';
  let p2 = 'http://localhost:3001/users';

  const urls = [p1, p2]; //2 request to be made

  Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
    .then(data => {
      const [items, users] = data;
      let dataArray = items.map(item => {
        const itemOwner = users.find(user => item.itemowner === user.id);
        const borrowOwner = users.find(user => item.borrower === user.id);
        item.itemowner = itemOwner;
        item.borrower = borrowOwner;
        return item;
      });
      dispatch(getItems(dataArray));
    })
    .catch(err => {
      dispatch(getItemsError(err));
    });
};

//Reducers

export default (
  state = {
    itemsData: [],
    isLoading: false,
    error: ''
  },
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
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case GET_ITEMS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
