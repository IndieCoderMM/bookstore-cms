import React from 'react';

const BookForm = () => (
  <div className="form-container">
    <h2>Add New Book</h2>
    <form className="book-form">
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Book author" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default BookForm;
