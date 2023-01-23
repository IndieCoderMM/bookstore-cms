import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import BookForm from './BookForm';

const BooksList = ({ books, addBook, removeBook }) => (
  <article className="bookslist-container">
    <ul className="bookslist">
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} remove={removeBook} />
        </li>
      ))}
    </ul>
    <BookForm addBook={addBook} />
  </article>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
    }),
  ).isRequired,
  addBook: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default BooksList;
