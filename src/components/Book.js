import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div className="book">
    <h2 className="book-title">{title}</h2>
    <h4 className="book-author">{author}</h4>
    <div className="btn-group">
      <button type="button">Comment</button>
      <div className="vertical-divider" />
      <button type="button">Remove</button>
      <div className="vertical-divider" />
      <button type="button">Edit</button>
    </div>
  </div>
);

Book.defaultProps = {
  title: '',
  author: '',
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
