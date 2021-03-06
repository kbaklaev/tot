import { NEW_FLOOD_MESSAGE, EDIT_FLOOD_MESSAGE, DELETE_FLOOD_MESSAGE } from '../actions/flood-actions';

const initialStore = [
  {
    id: 1,
    username: 'admin',
    message: 'Hi, everyone!',
  },
  {
    id: 2,
    username: 'admin',
    message: 'пофлудим?',
  },
];

const FloodReducer = (store = initialStore, action) => {
  switch (action.type) {
    case NEW_FLOOD_MESSAGE:
      return [
        ...store,
        { id: store.sort((a, b) => b.id - a.id)[0].id + 1, username: action.username, message: action.message },
      ];

    case EDIT_FLOOD_MESSAGE:
      return [
        ...store.filter(elem => elem.id !== action.id),
        {
          id: action.id,
          username: action.username,
          message: action.message,
        }
      ]

    case DELETE_FLOOD_MESSAGE:
      return [
        ...store.filter(elem => elem.id !== action.id)
      ]

    default:
      return store;
  }
};

export default FloodReducer;
