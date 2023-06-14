import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Overlay, Modal } from './ModalWindow.styled';

class ModalWindow extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = event => {
    // console.log('clic on the backdrop');

    // console.log(event.currentTarget);
    // console.log(event.target);

    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackDropClick}>
        <Modal>
          <img src="" alt="" />
        </Modal>
      </Overlay>
    );
  }
}

export default ModalWindow;
