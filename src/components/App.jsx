import React, { Component } from "react";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from "./Searchbar";
import ImageGallery from './ImageGallery';
import ModalWindow from './ModalWindow';

import { Container } from "./App.styled";


export class App extends Component {
  state = {
    searchValue: '',
    showModal: true,
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
    const { showModal } = this.state;

      return (
      <Container>
          <Searchbar getInputValue={this.getInputValue} />
          <ImageGallery searchValue={this.state.searchValue } />
          {showModal && <ModalWindow onClose={this.toggleModal} />}
          <ToastContainer autoClose={3000} />
      </Container>
    );
  }
};
