import React, { Component } from 'react';

import ImageGalleryItem from '../ImageGalleryItem';

import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <>
        <Gallery>
          {images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </Gallery>
      </>
    );
  }
}

export default ImageGallery;
