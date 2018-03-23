import React from 'react';
import TextInput from 'react-components/TextInput';

/** Required TextBox with error */
export default class Ex2Error extends React.Component {
  render() {
    return <TextInput
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
      required
      error="First name is required."
    />;
  }
}
