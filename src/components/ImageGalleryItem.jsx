import React from 'react'
import styles from '../styles/ImageGalleryItem.module.css'

class ImageGalleryItem extends React.Component {
  handleClick = () => this.props.onClick(this.props.largeImageURL)

  render() {
    return (
      <li className={styles.ImageGalleryItem}>
        <img
          className={styles.ImageGalleryItemImage}
          src={this.props.webformatURL}
          alt=""
          onClick={this.handleClick}
        />
      </li>
    )
  }
}

export default ImageGalleryItem