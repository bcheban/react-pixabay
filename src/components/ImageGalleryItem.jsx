import React from 'react';
import styles from '../styles/ImageGalleryItem.module.css';

export default class ImageGalleryItem extends React.Component {
  handleClick = () => {
    const { largeImageURL, onClick } = this.props;
    onClick(largeImageURL);           // 👉 передаємо в App
  };

  render() {
    const { webformatURL } = this.props;

    return (
      <li className={styles.ImageGalleryItem}>
        <img
          className={styles.ImageGalleryItemImage}
          src={webformatURL}
          alt=""
          onClick={this.handleClick}
        />
      </li>
    );
  }
}