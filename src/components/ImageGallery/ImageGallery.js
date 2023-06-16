import React, { Component } from 'react';

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
              onClick={onImgClick}
            />
          ))}
        </Gallery>
      </>
    );
  }
}

export default ImageGallery;
