import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemList,
  ImageGalleryImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onImgClick }) => {
  return (
    <ImageGalleryItemList>
      <ImageGalleryImage
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onImgClick(image.largeImageURL, image.tags)}
      />
    </ImageGalleryItemList>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onImgClick: PropTypes.func.isRequired,
};
