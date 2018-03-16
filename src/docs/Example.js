import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  toggleCode = (evt) => {
    evt.preventDefault();
    this.setState((prevState) => ({
      showCode: !prevState.showCode
    }));
  }

  render() {
    const {showCode} = this.state;
    const {code, description, name} = this.props.example;
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable
    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;
    return (
      <div className="uk-card uk-card-hover uk-card-body">
        {description && <h5 className="uk-heading-bullet">{description}</h5>}

        <ExampleComponent />

        <button className="uk-button-default">
          <a href="" onClick={this.toggleCode} style={{textDecoration: 'none'}}>
            {showCode ? 'Hide' : 'Show'} Code
          </a>
        </button>

        {showCode && <CodeExample>{code}</CodeExample>}
      </div>
    );
  }
}
Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
};

export default Example;
