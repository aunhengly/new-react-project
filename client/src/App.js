import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    message: 'no response yet hengly!'
  }

  handleClick() {
    axios.get('/api/v1/health').then((response) => {
      this.setState({ message: response.data })
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleClick()}>Click Me!</button>
        <div className="result">{this.state.message}</div>
      </div>
    );
  }
}

export default App;
