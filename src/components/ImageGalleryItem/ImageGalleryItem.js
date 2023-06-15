import React from 'react';
import {
  ImageGalleryItemList,
  ImageGalleryImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ images }) => {
  return (
    <ImageGalleryItemList>
      <ImageGalleryImage src={images.webformatURL} alt={images.tags} />
    </ImageGalleryItemList>
  );
};

export default ImageGalleryItem;
