import React from 'react';
import Button from 'react-components/Button';

/** Button with size modifier: small and large */
export default class Ex2Size extends React.Component {
  render() {
    return <div>
      <div>
        <Button onClick={() => {}} small> Small Button </Button>
      </div>
      <div style={{marginTop: 10}}>
        <Button onClick={() => {}} large> Large Button</Button>
      </div>
    </div>;
  }
}
