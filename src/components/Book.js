import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonGroup from './ButtonGroup';
import CommentSection from './CommentSection';
import { getComment } from '../redux/comments/comments';
import StatusContainer from './StatusContainer';
import ProgressBox from './ProgressBox';
import EditForm from './EditForm';

const Book = ({ book }) => {
  const {
    id, title, author, progress, category,
  } = book;
  const [commentShown, setCommentShown] = useState(false);
  const [editing, setEditing] = useState(false);
  const allComments = useSelector((state) => state.comments);

  const comments = allComments.find((c) => Object.keys(c).includes(id)) || {
    [id]: { comments: [] },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (commentShown) {
      dispatch(getComment(id));
    }
  }, [dispatch, commentShown, id]);

  const toggleComment = () => {
    setCommentShown((prevState) => !prevState);
  };

  const startEditing = () => {
    setCommentShown(false);
    setEditing(true);
  };

  const endEditing = () => {
    setEditing(false);
  };

  return (
    <div className="book">
      <div className="book-card">
        <div className="book-info">
          <span className="book-category">{category}</span>
          <h2 className="book-title">{title}</h2>
          <h4 className="book-author">{author}</h4>
          <ButtonGroup
            id={id}
            toggleComment={toggleComment}
            startEditing={startEditing}
          />
        </div>
        {editing ? (
          <EditForm id={id} endEditing={endEditing} />
        ) : (
          <ProgressBox progress={progress} />
        )}
        <div className="vertical-divider" />
        <StatusContainer progress={progress} />
      </div>
      {commentShown ? (
        <CommentSection id={id} comments={comments[id].comments} />
      ) : null}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
