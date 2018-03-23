import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor, and style modifiers */
const Label = ({htmlFor, label, required, modifier}) => {
  if (modifier) {
    modifier = ' uk-label-' + modifier;
  }
  return (
    <label style={{display: 'block'}} htmlFor={htmlFor}>
      <span className={'uk-label'+modifier}>{label} </span>{ required && <span style={{color: 'red'}}> *</span> }
    </label>
  );
};

Label.propTypes = {
  /** HTML ID for associated input */
  htmlFor: PropTypes.string.isRequired,
  /** Label text */
  label: PropTypes.string.isRequired,
  /** Display asterisk after label if true */
  required: PropTypes.bool,
  /** Additional styles */
  modifier: PropTypes.string
};

Label.defaultProps = {
  modifier: ''
};

export default Label;
