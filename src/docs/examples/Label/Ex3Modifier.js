import React from 'react';
import Label from 'react-components/Label';

/** Optional style modifier label */
export default function Ex3Modifier() {
  return (
    <div>
      <Label htmlFor='success' label='success' success/>
      <Label htmlFor='warning' label='warning' warning/>
      <Label htmlFor='danger' label='danger' danger/>
    </div>
  );
}
