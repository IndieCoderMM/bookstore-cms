import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../redux/books/books';

const makeNewBook = (title, author, category) => ({
  id: uuidv4(),
  title,
  author,
  category,
  progress: 0,
});

const BookForm = () => {
  const titleInput = useRef();
  const authorInput = useRef();
  const categoryInput = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleInput.current.value.trim();
    const author = authorInput.current.value.trim();
    const category = categoryInput.current.value.trim();
    if (title.length && author.length && category.length) {
      const book = makeNewBook(title, author, category);
      try {
        dispatch(createBook(book)).unwrap();
      } catch (err) {
        console.error(err);
      }
      titleInput.current.value = '';
      authorInput.current.value = '';
      categoryInput.current.value = '';
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
        <input
          ref={categoryInput}
          type="text"
          placeholder="Book category"
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
