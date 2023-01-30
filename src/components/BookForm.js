import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../redux/books/books';

const makeNewBook = (title, author, category, progress) => ({
  id: uuidv4(),
  title,
  author,
  category,
  progress: parseInt(progress, 10) || 0,
});

const BookForm = () => {
  const titleInput = useRef();
  const authorInput = useRef();
  const categoryInput = useRef();
  const progressInput = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleInput.current.value.trim();
    const author = authorInput.current.value.trim();
    const category = categoryInput.current.value.trim();
    const progress = progressInput.current.value;
    if (title.length && author.length && category.length) {
      const book = makeNewBook(title, author, category, progress);
      try {
        dispatch(createBook(book)).unwrap();
      } catch (err) {
        // eslint-disable-next-line
        console.error(err);
      }
      titleInput.current.value = '';
      authorInput.current.value = '';
    }
  };
  return (
    <div className="form-container">
      <h2>Add New Book</h2>
      <form className="book-form" onSubmit={handleSubmit}>
        <input
          ref={titleInput}
          type="text"
          placeholder="Book title"
          className="title-input"
          required
        />
        <input
          ref={authorInput}
          type="text"
          placeholder="Book author"
          className="author-input"
          required
        />
        <select ref={categoryInput}>
          <option value="Novel">Novel</option>
          <option value="Productivity">Productivity</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Biography">Biography</option>
          <option value="Science">Science</option>
        </select>
        <input
          ref={progressInput}
          type="number"
          max={100}
          min={0}
          step={1}
          placeholder="0 %"
          className="progress-input"
        />
        <button type="submit" className="add-btn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
