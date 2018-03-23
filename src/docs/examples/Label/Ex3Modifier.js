import React from 'react';
import Label from 'react-components/Label';

/** Optional modifier label */
export default function Ex3Modifier() {
  return (
    <div>
      <Label htmlFor='success' label='success' modifier='success'/>
      <Label htmlFor='warning' label='warning' modifier='warning'/>
      <Label htmlFor='danger' label='danger' modifier='danger'/>
    </div>
  );
}
