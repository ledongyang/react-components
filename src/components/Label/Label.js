import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor, and style modifiers */
const Label = ({htmlFor, label, required, success, warning, danger}) => {
  let style = 'uk-label';
  style = success ? style+' uk-label-success' : warning ? style+' uk-label-warning' : danger ? style+' uk-label-danger' : style;
  return (
    <label style={{display: 'block'}} htmlFor={htmlFor}>
      <span className={style}>{label} </span>
      { required && <span style={{color: 'red'}}> *</span> }
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
  /** Indicates success or positive message */
  success: PropTypes.bool,
  /** Indicates a warning message */
  warning: PropTypes.bool,
  /** Indicates an error or important message */
  danger: PropTypes.bool
};

export default Label;
