import React from 'react';
import PropTypes from 'prop-types';
import ProgressCircle from './ProgressCircle';

const ProgressBox = ({ progress }) => (
  <div className="progress-box">
    <ProgressCircle progress={progress} />
    <div className="percent-display">
      <span className="percent">{progress.toString().concat('%')}</span>
      <span>Completed</span>
    </div>
  </div>
);

ProgressBox.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBox;
