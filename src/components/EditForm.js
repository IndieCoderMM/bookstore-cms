import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { createBook, deleteBook } from '../redux/books/books';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  & input,
  select {
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
  }

  & > div {
    display: flex;
    justify-content: space-between;
  }

  & button {
    padding: 0.5rem;
    background-color: #4386bf;
    color: #fff;
    border: none;
    border-radius: 4px;
    transition: all 0.2s;
  }
  & button:hover {
    background-color: #0290ff;
  }
`;

const EditForm = ({ id, endEditing }) => {
  const book = useSelector((state) => state.books).find((b) => b.id === id);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [category, setCategory] = useState(book.category);

  const updateBook = () => {
    const updatedBook = {
      ...book,
      title: title.toLowerCase(),
      author: author.toLowerCase(),
      category,
    };
    dispatch(deleteBook(book.id));
    dispatch(createBook(updatedBook));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length && author.trim().length) {
      if (
        title === book.title &&
        author === book.author &&
        category === book.category
      )
        return;
      updateBook();
    }
  };
  return (
    <div>
      <h4>Editing</h4>
      <FormContainer onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <div>
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Novel">Novel</option>
            <option value="Productivity">Productivity</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Biography">Biography</option>
            <option value="Science">Science</option>
          </select>
        </div>
        <div>
          <button type="button" onClick={() => endEditing()}>
            Cancel
          </button>
          <button type="submit">Confirm</button>
        </div>
      </FormContainer>
    </div>
  );
};

EditForm.propTypes = {
  id: PropTypes.string.isRequired,
  endEditing: PropTypes.func.isRequired,
};

export default EditForm;
