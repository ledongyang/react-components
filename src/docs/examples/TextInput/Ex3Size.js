import React from 'react';
import TextInput from 'react-components/TextInput';

/** Size Modifier (large, small) TextBox */
export default class Ex3Size extends React.Component {
  render() {
    return <div>
      <TextInput
        htmlId="example-size"
        label="Large Name"
        name="largename"
        size="large"
        placeholder="large"
        onChange={() => {}}
      />
      <TextInput
        htmlId="example-size"
        label="Default Name"
        name="defaultname"
        placeholder="default"
        onChange={() => {}}
      />
      <TextInput
        htmlId="example-size"
        label="Small Name"
        name="smallname"
        size="small"
        placeholder="small"
        onChange={() => {}}
      />
    </div>;
  }
}
