import React, { Component } from "react";
import Searchbar from "./Searchbar";
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
          {showModal && <ModalWindow onClose={this.toggleModal} />}
      </Container>
    );
  }
};
