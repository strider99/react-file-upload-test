import React, { Component } from 'react'

export default class FileUpload extends Component {
  state={}

  fileSubmitHandler = () =>{
    console.log("file submit done");
  }


  render() {
    return (
      <div>
        <form action="">
          <div>
            <input type="file" name="file" id="file"/>
            <br />
          </div>
          <button onSubmit={this.fileSubmitHandler} >Submit File</button>
        </form>
      </div>
    )
  }
}
