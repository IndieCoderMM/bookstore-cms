import React from 'react';

const BookForm = () => (
  <div>
    <form className="book-form">
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Book author" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default BookForm;
