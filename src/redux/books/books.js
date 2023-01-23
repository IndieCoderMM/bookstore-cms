const ADD_BOOK = 'redux/books/BOOK_ADDED';
const REMOVE_BOOK = 'redux/books/BOOK_REMOVED';

let currentId = 0;

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          progress: 0,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addBook = (title, author) => ({
  type: ADD_BOOK,
  title,
  author,
  // eslint-disable-next-line
  id: currentId++,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default reducer;
