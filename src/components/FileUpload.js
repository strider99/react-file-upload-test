import React, { Component } from 'react';
import axios from 'axios';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default class FileUpload extends Component {
  state={
    selectedFile: null,
    loaded: 0
  }

  fileSubmitHandler = (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    // console.log(data.getAll('general'));
    // add a confirm alert just for fun
    confirmAlert({
      title: "Confrm file upload ",
      message: "Are you sure?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
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
        },
        {
          label: "No",
          onClick: () => {
            alert("file not uploaded");
          }
        }
      ]

    })
    // data.append('file', this.state.selectedFile, this.state.selectedFile.name);
    // let fileData = e.target.files[0];
    // console.log(fileData);


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
