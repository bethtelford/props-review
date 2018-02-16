import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
    this.state ={
      inputText: ''
    }
  }
  render() {
    return (
      <div>
        <input value={this.state.inputText} onChange={event => this.setState({inputText: event.target.value})}/>
        <button onClick={()=>this.props.inputText(this.state.inputText)}>Change It</button>
      </div>
    );
  }
}

export default Input;