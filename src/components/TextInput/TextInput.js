import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

/** Text input with integrated label to enforce consistency in layout, error display, label placement, required field marker, size modifier, and width modifier. */
function TextInput({htmlId, name, label, type = 'text', size, width, required = false, onChange, placeholder, value, error, children, ...props}) {
  size = size ? ' uk-form-'+size : '';
  width = width ? ' uk-form-width-'+width : '';
  return (
    <div className="uk-margin">
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={'uk-input'+size+width}
        style={error && {border: 'solid 1px red'}}
        {...props}/>
      {children}
      {error && <div className="error" style={{color: 'red'}}>{error}</div>}
    </div>
  );
}

TextInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Size Modifier */
  size: PropTypes.string,

  /** Width Modifier */
  width: PropTypes.string,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node
};

TextInput.defaultProps = {
  width: 'medium'
};

export default TextInput;
