import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';

const ButtonGroup = ({ id, toggleComment, startEditing }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteBook(id));
  };

  const handleEdit = () => {
    startEditing();
  };

  return (
    <div className="btn-group">
      <button type="button" onClick={toggleComment}>
        Comment
      </button>
      <div className="vertical-divider" />
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
      <div className="vertical-divider" />
      <button type="button" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
};

ButtonGroup.propTypes = {
  id: PropTypes.string.isRequired,
  toggleComment: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
};

export default ButtonGroup;
