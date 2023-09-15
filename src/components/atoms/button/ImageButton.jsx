//import React from 'react';
import PropTypes from 'prop-types';


const ImageButton = ({ image, onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={image} alt="button" />
    </button>
  );
};

ImageButton.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, 
};

export default ImageButton;