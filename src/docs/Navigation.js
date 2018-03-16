import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({components, route}) => {
  return (
    <div className="navigation">
      <ul className="uk-nav uk-nav-primary">
        {
          components.map((name) => {
            return (
              name === route ?
                <li key={name} className="uk-active">
                  <a href={`#${name}`}>{name}</a>
                </li> : <li key={name}>
                  <a href={`#${name}`}>{name}</a>
                </li>
            );
          })
        }
      </ul>
    </div>
  );
};

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
