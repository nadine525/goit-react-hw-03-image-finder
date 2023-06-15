import React, { Component } from "react";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from "./Searchbar";

import ImageGallery from './ImageGallery';
import ModalWindow from './ModalWindow';

import { Container } from "./App.styled";

import { fetchImages} from './services/api';



export class App extends Component {
  state = {
    searchValue: '',
    showModal: false,
    images: [],
    page: 1,
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

    try {
      const response = await fetchImages(searchValue, page);
      console.log(response);

      this.setState(prevState => ({images: [...prevState.images, ...response.hits]}));
    } catch (error) {
      this.setState({ error });

    } finally {
      this.setState({ isLoading: false });
    }
  };

  getInputValue = handleValue => {
    console.log(handleValue);
    this.setState({
      searchValue: handleValue,
    });
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }



  render() {
    const { images, showModal } = this.state;

      return (
      <Container>
          <Searchbar getInputValue={this.getInputValue} />
          <ImageGallery images={images} />
          {showModal && <ModalWindow onClose={this.toggleModal} />}
          <ToastContainer autoClose={3000} />
      </Container>
    );
  }
};
