import React, { Component } from 'react'
import styles from '../styles/Modal.module.css'

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc)
  }

  handleEsc = e => e.code === 'Escape' && this.props.onClose()
  handleBackdrop = e => e.currentTarget === e.target && this.props.onClose()

  render() {
    return (
      <div className={styles.Overlay} onClick={this.handleBackdrop}>
        <div className={styles.Modal}>
          <img src={this.props.largeImageURL} alt="" className={styles.ModalImg} />
        </div>
      </div>
    )
  }
}

export default Modal