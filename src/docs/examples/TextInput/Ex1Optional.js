import React from 'react';
import TextInput from 'react-components/TextInput';

/** Optional TextBox */
export default class Ex1Optional extends React.Component {
  render() {
    return <TextInput
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
    />;
  }
}
