import React, { Component } from 'react'
import loading from './loading.gif'

export class spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt='chal mera putter choti r'/>
      </div>
    )
  }
}

export default spinner

