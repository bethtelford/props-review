import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Display from './components/Display';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'test message'
    }
    this.newMessage = this.newMessage.bind(this);
  }
  newMessage(text) {  
    this.setState({
      message: text
    })
  }
  render() {
    return (
      <div className="App">
        <Display displayMessage={this.state.message} />
        <Input inputText={this.newMessage} />
      </div>
    );
  }
}

export default App;
