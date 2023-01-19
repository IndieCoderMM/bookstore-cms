import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

const BooksList = () => {
  const books = [
    {
      id: 1,
      title: 'One Thing',
      author: 'Garry Keller',
    },
    {
      id: 0,
      title: 'Atomic Habits',
      author: 'James Clear',
    },
  ];
  return (
    <div className="bookslist-container">
      <ul className="bookslist">
        {books.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <BookForm />
    </div>
  );
};

export default BooksList;
