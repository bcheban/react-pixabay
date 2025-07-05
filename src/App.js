import React from 'react'
import './App.css'
import Searchbar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
import Button from './components/Button'
import Modal from './components/Modal'
import Loader from './components/Loader'
import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api'
const API_KEY = '51105397-aef3055b6813d883a5d382b16'

class App extends React.Component {
  state = {
    images: [],
    page: 1,
    value: '',
    modalImageURL: null,
    isLoading: false,
  }

  handleSubmit = async value => {
    const query = value.trim()
    this.setState({ value: query, page: 1, images: [], isLoading: true })
    try {
      const { data } = await axios.get('/', {
        params: {
          q: query,
          page: 1,
          key: API_KEY,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      })
      this.setState({ images: data.hits })
    } catch (e) {
      console.error(e)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  loadMore = async () => {
    const nextPage = this.state.page + 1
    this.setState({ isLoading: true })
    try {
      const { data } = await axios.get('/', {
        params: {
          q: this.state.value,
          page: nextPage,
          key: API_KEY,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      })
      this.setState(prev => ({
        images: [...prev.images, ...data.hits],
        page: nextPage,
      }))
    } catch (e) {
      console.error(e)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  openModal = url => this.setState({ modalImageURL: url })
  closeModal = () => this.setState({ modalImageURL: null })

  render() {
    const { images, modalImageURL, isLoading } = this.state
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <Button onClick={this.loadMore} />}
        {modalImageURL && (
          <Modal largeImageURL={modalImageURL} onClose={this.closeModal} />
        )}
      </div>
    )
  }
}

export default App