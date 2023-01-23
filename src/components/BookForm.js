import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ addBook }) => {
  const titleInput = useRef();
  const authorInput = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleInput.current.value.trim();
    const author = authorInput.current.value.trim();
    if (title.length && author.length) {
      addBook(title, author);
      titleInput.current.value = '';
      authorInput.current.value = '';
    }
  };
  return (
    <div className="form-container">
      <h2>Add New Book</h2>
      <form className="book-form" onSubmit={handleSubmit}>
        <input ref={titleInput} type="text" placeholder="Book title" />
        <input ref={authorInput} type="text" placeholder="Book author" />
        <button type="submit" className="add-btn">
          Add Book
        </button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default BookForm;
