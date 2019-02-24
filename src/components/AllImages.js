import React, { Component } from 'react'
import Axios from 'axios';

export default class AllImages extends Component {

  componentDidMount() {
    Axios.get('http://192.168.0.50:3030/upload')
      .then(res => {
        console.log(res);
      })
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
