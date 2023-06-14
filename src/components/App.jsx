import React, { Component } from "react";
import Searchbar from "./Searchbar";

export class App extends Component {
  state = {
      searchValue: '',
  };

  getInputValue = handleValue => {
    console.log(handleValue);
    this.setState({
      searchValue: handleValue,
    });
  };



  render() {
      return (
      <>
          <Searchbar getInputValue={this.getInputValue} />
      </>
    );
  }
};
