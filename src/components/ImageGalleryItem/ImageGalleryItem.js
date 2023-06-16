import React from 'react';
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
