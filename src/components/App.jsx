import React, { Component } from "react";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from "./Searchbar";
import ImageGallery from './ImageGallery';
import Button from "./Button";
import ModalWindow from './ModalWindow';
import Loader from "./Loader/Loader";

import { fetchImages} from './services/api';

import { Container } from "./App.styled";



export class App extends Component {
  state = {
    searchValue: '',
    showModal: false,
    images: [],
    page: 1,
    status: 'idle',
    modalImg: '',
    modalTags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue || prevState.page !== this.state.page) {
      // console.log(prevState.searchValue);
      // console.log(this.state.searchValue);

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
      console.log(error);
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

  onButtonClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  render() {
    const { images, showModal, modalImg, modalTags} = this.state;

      return (
      <Container>
          <Searchbar getInputValue={this.getInputValue} />

          {this.state.images.length > 0 && (<ImageGallery images={images} onImgClick={this.getLargeImg} />)}

          {this.state.status === 'pending' && <Loader />}
          {this.state.images.length > 0 && (<Button onClick={this.onButtonClick} />)}
        
          {showModal && (<ModalWindow url={modalImg} tags={modalTags} onClose={this.toggleModal} />)}
          <ToastContainer autoClose={3000} />
      </Container>
    );
  }
};
