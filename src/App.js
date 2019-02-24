import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileUpload from './components/FileUpload';
import AllImages from './components/AllImages';

class App extends Component {
  state ={
    showAllImages: false
  }
  getAllImages = () => {
    this.setState({
      showAllImages: !this.state.showAllImages
    })
  }
  render() {
    return (
      <div className="App">
        <FileUpload />
        <button onClick={this.getAllImages} >All Images</button>

        {this.state.showAllImages ? <AllImages /> : null}
      </div>
    );
  }
}

export default App;
