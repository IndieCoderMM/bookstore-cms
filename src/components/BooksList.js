import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import BookForm from './BookForm';

const BooksList = ({ books, addBook, removeBook }) => (
  <article className="bookslist-container">
    <ul className="bookslist">
      {books.map((book) => (
        <li key={book.id}>
          <Book
            title={book.title}
            author={book.author}
            progress={book.progress}
          />
        </li>
      ))}
    </ul>
    <BookForm addBook={addBook} />
  </article>
);

BooksList.propTypes = {
  // eslint-disable-next-line
  books: PropTypes.array.isRequired,
  addBook: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default BooksList;
