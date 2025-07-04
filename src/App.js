import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

class App extends React.Component {
  state = {
    images: [],
    page: 1,
    value: '',
    modalImageURL: null,   
  };

  handleSubmit = async value => {
    this.setState({ value, page: 1, images: [] });

    try {
      const resp = await axios.get(
        `/?q=${value}&page=1&key=51105397-aef3055b6813d883a5d382b16&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({ images: resp.data.hits });
    } catch (err) {
      console.log(err);
    }
  };

  loadMore = async () => {
    const nextPage = this.state.page + 1;
    try {
      const resp = await axios.get(
        `/?q=${this.state.value}&page=${nextPage}&key=51105397-aef3055b6813d883a5d382b16&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState(prev => ({
        images: [...prev.images, ...resp.data.hits],
        page: nextPage,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  openModal = largeImageURL => {
    this.setState({ modalImageURL: largeImageURL });
  };

  closeModal = () => {
    this.setState({ modalImageURL: null });
  };

  render() {
    const { images, modalImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery images={images} onImageClick={this.openModal} />

        {images.length > 0 && <Button onClick={this.loadMore} />}

        {modalImageURL && (
          <Modal largeImageURL={modalImageURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;