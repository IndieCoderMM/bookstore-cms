import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { addNewComment } from '../redux/comments/comments';

const CommentForm = styled.form`
  display: flex;
  gap: 1rem;
`;

const CommentSection = ({ id, comments = [] }) => {
  const dispatch = useDispatch();

  const commentRef = useRef();
  const nameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = commentRef.current.value.trim();
    const username = nameRef.current.value.trim();
    if (comment.length && username.length) {
      dispatch(addNewComment({ id, username, comment }));
    }
  };

  return (
    <div>
      <CommentForm onSubmit={handleSubmit}>
        <input
          type="text"
          ref={nameRef}
          maxLength={10}
          placeholder="Your name"
          required
        />
        <input
          type="text"
          ref={commentRef}
          maxLength={50}
          placeholder="Add your comment"
          required
        />
        <button type="submit">Add</button>
      </CommentForm>
      <ul>
        {comments.map((c) => (
          <li key={uuid()}>
            {c.username}
            {c.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

CommentSection.propTypes = {
  id: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CommentSection;
