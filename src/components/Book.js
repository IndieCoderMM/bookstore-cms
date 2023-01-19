import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div>
    <h2>{title}</h2>
    <h4>{author}</h4>
    <div className="btn-group">
      <button type="button">Comment</button>
      <button type="button">Remove</button>
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
