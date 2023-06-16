import React, { Component } from "react";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from "./Searchbar";

import ImageGallery from './ImageGallery';
import ModalWindow from './ModalWindow';

import { Container } from "./App.styled";

import { fetchImages} from './services/api';
// import Loader from "./Loader/Loader";



export class App extends Component {
  state = {
    searchValue: '',
    showModal: false,
    images: [],
    page: 1,
    status: 'idle',
    error: false,
    modalImg: '',
    modalTags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue || prevState.page !== this.state.page) {
      // console.log(prevState.searchValue);
      // console.log(this.state.searchValue);
      // this.setState({ loading: true });
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { searchValue, page } = this.state;
    
    try {
      this.setState({ status: 'pending' });
      const response = await fetchImages(searchValue, page);
      console.log(response);

      this.setState(prevState => ({ images: [...prevState.images, ...response.hits] }));
      this.setState({ status: 'resolved' });
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  }

  getInputValue = handleValue => {
    console.log(handleValue);
    this.setState({
      searchValue: handleValue,
    });
  };

  toggleModal = (event) => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
  };

  getLargeImg = (imageURL, imageTags)=> {
    this.setState({ modalImg: imageURL, modalTags: imageTags });
    this.toggleModal();
  };



  render() {
    const { images, showModal, modalImg, modalTags } = this.state;

      return (
      <Container>
          <Searchbar getInputValue={this.getInputValue} />
          <ImageGallery images={images} onImgClick={this.getLargeImg} />
        
          {showModal && <ModalWindow url={modalImg} tags={modalTags} onClose={this.toggleModal} />}
          <ToastContainer autoClose={3000} />
      </Container>
    );
  }
};
