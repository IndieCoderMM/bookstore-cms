import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

const BooksList = () => {
  const books = [
    {
      id: 1,
      title: 'One Thing',
      author: 'Garry Keller',
      progress: '53',
    },
    {
      id: 0,
      title: 'Atomic Habits',
      author: 'James Clear',
      progress: '67',
    },
  ];
  return (
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
      <BookForm />
    </article>
  );
};

export default BooksList;
