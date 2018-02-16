import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <h1>{this.props.displayMessage}</h1>
    );
  }
}

export default Display;