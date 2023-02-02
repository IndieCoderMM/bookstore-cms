import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';
import { addNewComment } from '../redux/comments/comments';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: aliceblue;
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const CommentForm = styled.form`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  & > input {
    padding: 0.5rem 1.5rem;
    border-radius: 50rem;
    border: solid 1px #ccc;
    flex: 1;
  }

  & > input:nth-child(2) {
    flex: 2;
  }

  & > button {
    padding: 0.5rem 1rem;
    background-color: #307bbe;
    border: none;
    border-radius: 8px;
    color: #fff;
    transition: all 0.3s;
  }

  & > button:hover {
    background-color: #0290ff;
  }
`;

const CommentUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 2px 5px rgba(150, 150, 150, 0.3);
  padding: 0.5rem 2rem;
`;

const colors = ['#9c27b0', '#3f51b5', '#e91e63', '#4caf50', '#ff5722'];

const CommentItem = styled.li`
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: ${() => colors[Math.floor(Math.random() * colors.length)]};
  gap: 1rem;
  border-bottom: solid 1px lightgrey;

  &:last-child {
    border-bottom: none;
  }

  & div {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    color: indigo;
  }

  & div h4 {
    text-transform: capitalize;
  }
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
      commentRef.current.value = '';
      nameRef.current.value = '';
    }
  };

  return (
    <Container>
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
        <button type="submit">Post</button>
      </CommentForm>
      <CommentUl>
        {comments.length ? (
          comments.map((c) => (
            <CommentItem key={uuid()}>
              <FaUserCircle />
              <div>
                <h4>{c.username}</h4>
                <span>{c.comment}</span>
              </div>
            </CommentItem>
          ))
        ) : (
          <h4>😃 Share your thoughts on this book!</h4>
        )}
      </CommentUl>
    </Container>
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
