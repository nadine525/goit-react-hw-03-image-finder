import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    input: '',
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
    // console.log(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getInputValue(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;

    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            name="input"
            type="text"
            value={input}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
