import React from 'react';
import Button from 'react-components/Button';

/** Button with style modifier: primary, secondary, and danger */
export default class Ex1Modifier extends React.Component {
  render() {
    return <div>
      <Button onClick={() => {}}> Default </Button>
      <Button onClick={() => {}} primary> Primary </Button>
      <Button onClick={() => {}} secondary> Secondary </Button>
      <Button onClick={() => {}} danger> Danger </Button>
    </div>;
  }
}
