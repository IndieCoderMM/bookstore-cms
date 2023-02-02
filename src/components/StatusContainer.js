import React from 'react';
import PropTypes from 'prop-types';

const StatusContainer = ({ progress }) => (
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
);

StatusContainer.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default StatusContainer;
