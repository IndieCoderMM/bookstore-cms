import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const EditForm = ({ endEditing }) => (
  <div>
    <h3>Editing</h3>
    <FormContainer onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Book Title" />
      <div>
        <input type="text" placeholder="Author" />
        <select>
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

EditForm.propTypes = {
  endEditing: PropTypes.func.isRequired,
};

export default EditForm;
