import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const imgWithClick = { cursor: 'pointer' };

class CustomPhoto extends PureComponent {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { onClick, index, photo } = this.props;
    onClick(event, { photo, index });
  }

  render() {
    const { photo, onClick, margin } = this.props;
    const imgStyle = { display: 'block', float: 'left', margin: "1rem 1rem", backgroundColor: 'red', minHeight: '500px'};
    return (
      <img
        style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
        {...photo}
        onClick={onClick ? this.handleClick : null}
      />
    );
  }
}

export const photoPropType = PropTypes.shape({
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  srcSet: PropTypes.array,
  sizes: PropTypes.array,
});

CustomPhoto.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func,
  photo: photoPropType,
};

export default CustomPhoto;
