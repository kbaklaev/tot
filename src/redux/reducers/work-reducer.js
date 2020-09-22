import { NEW_WORK_MESSAGE, EDIT_WORK_MESSAGE, DELETE_WORK_MESSAGE } from "../actions/work-actions";

const initialStore = [
  {
    id: 1,
    username: "admin",
    message: "Hi, everyone!",
  },
  {
    id: 2,
    username: "admin",
    message: "поработаем?",
  },
];

const workReducer = (store = initialStore, action) => {
  switch (action.type) {
    case NEW_WORK_MESSAGE:
      return [
        ...store,
        {
          id: store.sort((a, b) => b.id - a.id)[0].id + 1,
          username: action.username,
          message: action.message,
        },
      ];

    case EDIT_WORK_MESSAGE:
      return [
        ...store.filter(elem => elem.id !== action.id),
        {
          id: action.id,
          username: action.username,
          message: action.message,
        }
      ]

    case DELETE_WORK_MESSAGE:
      return [
        ...store.filter(elem => elem.id !== action.id)
      ]

    default:
      return store;
  }
};

export default workReducer;
