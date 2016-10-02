import React, { PropTypes } from 'react';
import './spinner.css';

const Spinner = ({ isVisible }) => (
  <div className="spinner">
    {isVisible
      ? <span className="spin glyphicon glyphicon-refresh" />
      : null}
  </div>
);

Spinner.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Spinner;
