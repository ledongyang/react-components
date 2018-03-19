import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({components, route}) => {
  return (
    <div className="navigation">
      <ul className="uk-nav uk-nav-default">
        {
          components.map((name) => {
            return (
              name === route ?
                <li key={name} className="underline uk-active">
                  <a href={`#${name}`} style={{color: '#1597EC'}}>{name}</a>
                </li> : <li key={name} className="underline">
                  <a href={`#${name}`} className="underline">{name}</a>
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
