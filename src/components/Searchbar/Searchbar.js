import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Header, Form, Button, Input } from './Searchbar.styled';
import { iconSize } from '../constans';

class Searchbar extends Component {
  state = {
    input: '',
  };

  handleChange = event => {
    this.setState({ input: event.target.value.toLowerCase().trim() });
    // console.log(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.input === '') {
      toast.warning(
        'Input is empty. Please, write the subject of your request.'
      );
      return;
    }
    this.props.getInputValue(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;

    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <FaSearch size={iconSize.md} />
          </Button>

          <Input
            name="input"
            type="text"
            value={input}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
