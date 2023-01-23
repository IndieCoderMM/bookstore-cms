import { connect } from 'react-redux';
import BooksList from '../components/BooksList';
import { addBook, removeBook } from '../redux/books/books';

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  addBook: (title, author) => dispatch(addBook(title, author)),
  removeBook: (id) => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
