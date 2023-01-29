import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';

const ButtonGroup = ({ id, showComments }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="btn-group">
      <button type="button" onClick={showComments}>
        Comment
      </button>
      <div className="vertical-divider" />
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
      <div className="vertical-divider" />
      <button type="button">Edit</button>
    </div>
  );
};

ButtonGroup.propTypes = {
  id: PropTypes.string.isRequired,
  showComments: PropTypes.func.isRequired,
};

export default ButtonGroup;
