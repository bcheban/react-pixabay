import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from '../styles/ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        onClick={onImageClick}
      />
    ))}
  </ul>
);

export default ImageGallery;
