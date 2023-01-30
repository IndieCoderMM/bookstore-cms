import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonGroup from './ButtonGroup';
import ProgressCircle from './ProgressCircle';
import CommentSection from './CommentSection';
import { getComment } from '../redux/comments/comments';

const Book = ({ book }) => {
  const {
    id, title, author, progress, category,
  } = book;
  const [commentShown, setCommentShown] = useState(false);
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

  const showComments = () => {
    setCommentShown((prevState) => !prevState);
  };

  return (
    <div className="book">
      <div className="book-card">
        <div className="book-info">
          <span className="book-category">{category}</span>
          <h2 className="book-title">{title}</h2>
          <h4 className="book-author">{author}</h4>
          <ButtonGroup id={id} showComments={showComments} />
        </div>
        <div className="progress-box">
          <ProgressCircle progress={progress} />
          <div className="percent-display">
            <span className="percent">{progress.toString().concat('%')}</span>
            <span>Completed</span>
          </div>
        </div>
        <div className="vertical-divider" />
        <div className="status-container">
          <h2>Current Chapter</h2>
          <p className="chapter">
            <span>Chapter:</span>
            <span>{Math.floor(progress * 0.1) + 10}</span>
          </p>
          <button type="button" className="update-btn">
            Update Progress
          </button>
        </div>
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
