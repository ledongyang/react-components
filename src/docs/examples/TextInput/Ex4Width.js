import React from 'react';
import TextInput from 'react-components/TextInput';

/** Width Modifier (large, medium, small, xsmall) TextBox */
export default class Ex4Width extends React.Component {
  render() {
    return <div>
      <TextInput
        htmlId="example-width"
        label="Large Name"
        name="largename"
        width="large"
        placeholder="large"
        onChange={() => {}}
      />
      <TextInput
        htmlId="example-width"
        label="Default Name"
        name="defaultname"
        placeholder="default"
        onChange={() => {}}
      />
      <TextInput
        htmlId="example-width"
        label="Small Name"
        name="smallname"
        width="small"
        placeholder="small"
        onChange={() => {}}
      />
      <TextInput
        htmlId="example-width"
        label="XSmall Name"
        name="xsmallname"
        width="xsmall"
        placeholder="xsmall"
        onChange={() => {}}
      />
    </div>;
  }
}
