import React from 'react';
import PropTypes from 'prop-types';

/** Buttons come with style, size, and width modifiers */
const Button = ({name, type, value, onClick, children, primary, secondary, danger, small, large, full, ...props}) => {
  let style = 'uk-button';
  // append style modifier
  style = primary ? style+' uk-button-primary' : secondary ? style+' uk-button-secondary' : danger ? style+' uk-button-danger' : style+' uk-button-default';
  // append size modifier
  style = small ? style+' uk-button-small' : large ? style+' uk-button-large' : style;
  // append width modifier
  style = full ? style+' uk-width-1-1' : style;
  return (
    <button
      className={style}
      name={name}
      type={type}
      value={value}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** The name of button, which is submitted with form data */
  name: PropTypes.string,
  /** The type of button, possible values are: submit, reset, and button */
  type: PropTypes.string,
  /** The initial value of the button */
  value: PropTypes.any,
  /** Function to call onClick */
  onClick: PropTypes.func,
  /** Child component to display inside of the button */
  children: PropTypes.node,
  /** Indicates the primary action */
  primary: PropTypes.bool,
  /** Indicates an important action */
  secondary: PropTypes.bool,
  /** Indicates a dangerous or negative action */
  danger: PropTypes.bool,
  /** Size modifier: small size button */
  small: PropTypes.bool,
  /** Size modifier: large size button */
  large: PropTypes.bool,
  /** Width modifier makes the button take up full width */
  full: PropTypes.bool
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
