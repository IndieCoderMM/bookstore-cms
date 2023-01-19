import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, progress }) => (
  <div className="book">
    <div className="book-info">
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
    <div className="progress-box">
      <div className="progress-bar" />
      <div className="percent-display">
        <span className="percent">{progress.concat('%')}</span>
        <span>Completed</span>
      </div>
    </div>
    <div className="vertical-divider" />
    <div className="status-container">
      <h2>Current Chapter</h2>
      <h3 className="chapter">Chapter 13</h3>
      <button type="button" className="update-btn">
        Update Progress
      </button>
    </div>
  </div>
);

Book.defaultProps = {
  title: '',
  author: '',
  progress: '0',
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  progress: PropTypes.string,
};

export default Book;
