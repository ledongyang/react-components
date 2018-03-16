import React from 'react';
import RegistrationForm from 'react-components/RegistrationForm';

export default class ExampleRegistrationForm extends React.Component {

  onSubmit = (user) => {
    // eslint-disable-next-line
    console.log(user);
  }

  render() {
    return <RegistrationForm onSubmit={this.onSubmit}/>;
  }
}
