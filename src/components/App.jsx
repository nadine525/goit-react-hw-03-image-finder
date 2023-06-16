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
    loading: false,
    error: false,
    modalImg: '',
    modalTags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      // console.log(prevProps.searchValue);
      // console.log(this.props.searchValue);
    }
    
    this.fetchImages();
  }

  fetchImages = async () => {
    const { searchValue, page } = this.state;

    this.setState({ loading: true });
    
    try {
      const response = await fetchImages(searchValue, page);
      // console.log(response);

      this.setState(prevState => ({ images: [...prevState.images, ...response.hits] }));
      
    } catch (error) {
      this.setState({ error });

    } finally {
      this.setState({ loading: false });
    }
  };

  getInputValue = handleValue => {
    console.log(handleValue);
    this.setState({
      searchValue: handleValue,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  };

  getLargeImg = (imageURL, imageTags)=> {
    this.toggleModal();
    this.setState({ modalImg: imageURL, modalTags: imageTags });
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
