import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const makeNewBook = (title, author) => ({ id: uuidv4(), title, author });

const BookForm = () => {
  const titleInput = useRef();
  const authorInput = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleInput.current.value.trim();
    const author = authorInput.current.value.trim();
    if (title.length && author.length) {
      const newBook = makeNewBook(title, author);
      dispatch(addBook(newBook));
      titleInput.current.value = '';
      authorInput.current.value = '';
    }
  };
  return (
    <div className="form-container">
      <h2>Add New Book</h2>
      <form className="book-form" onSubmit={handleSubmit}>
        <input ref={titleInput} type="text" placeholder="Book title" required />
        <input
          ref={authorInput}
          type="text"
          placeholder="Book author"
          required
        />
        <button type="submit" className="add-btn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
