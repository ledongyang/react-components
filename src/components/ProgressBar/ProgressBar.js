import React from 'react';
import PropTypes from 'prop-types';

/** Progress Bar with different color according to percentage. */
class ProgressBar extends React.Component {

  getColor = (percent) => {
    if (percent === 100) return 'green';
    return percent > 50 ? 'orange' : 'red';
  }

  getWidthAsPercentOfTotalWidth = () => {
    return parseInt(this.props.width*(this.props.percent/100), 10);
  }

  render() {
    const {percent, width, height} = this.props;
    return (
      <div style={{border: 'solid 1px lightgray', width: width}}>
        <div style={{
          width: this.getWidthAsPercentOfTotalWidth(),
          height: height,
          backgroundColor: this.getColor(percent)
        }}></div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  /** Bar percent */
  percent: PropTypes.number.isRequired,
  /** Bar width */
  width: PropTypes.number.isRequired,
  /** Bar height */
  height: PropTypes.number
};

ProgressBar.defaultProps = {
  height: 5
};

export default ProgressBar;
