import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {
  render() {
    const { images, onImgClick } = this.props;

    return (
      <>
        <Gallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onImgClick={onImgClick}
            />
          ))}
        </Gallery>
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onImgClick: PropTypes.func.isRequired,
};
