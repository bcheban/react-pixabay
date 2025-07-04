import React, { Component } from 'react';
import styles from '../styles/Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') this.props.onClose();
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) this.props.onClose();
  };

  render() {
    const { largeImageURL } = this.props;

    return (
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <img src={largeImageURL} alt="Large version" className={styles.ModalImg} />
        </div>
      </div>
    );
  }
}

export default Modal;