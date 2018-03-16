import React from 'react';
import PropTypes from 'prop-types';

const Props = ({props}) => {
  return (
    <table className="uk-table uk-table-hover uk-table-divider">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(props).map((key) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{props[key].description}</td>
                <td style={{textAlign: 'center'}}>{props[key].type.name}</td>
                <td style={{textAlign: 'center'}}>{props[key].defaultValue && props[key].defaultValue.value}</td>
                <td style={{textAlign: 'center'}}>{props[key].required && 'Yes'}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

Props.propTypes = {
  props: PropTypes.object.isRequired
};

export default Props;
