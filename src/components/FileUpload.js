import React, { Component } from 'react';
import axios from 'axios';

export default class FileUpload extends Component {
  state={
    selectedFile: null,
    loaded: 0
  }

  fileSubmitHandler = (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.getAll('general'));
    // data.append('file', this.state.selectedFile, this.state.selectedFile.name);
    // let fileData = e.target.files[0];
    // console.log(fileData);
    let endpoint = "http://192.168.0.50:3030/upload/";
    axios
    .post(endpoint, data, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
        })
      },
    })
    .then(res => {
      console.log(res)
    })

  }

  selectFileHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
      loaded: 0
    }, () => {
      // console.log(this.state.selectedFile);
    })
  }


  render() {
    return (
      <div>
        <form action="" encType="multipart/form-data" onSubmit={this.fileSubmitHandler}  >
          <div>
            <input type="file" name="general" id="general" onChange={this.selectFileHandler} />
            <br />
          </div>
          <button type="submit" >Submit File</button>
          <div> {Math.round(this.state.loaded,2) } %</div>
        </form>
      </div>
    )
  }
}
