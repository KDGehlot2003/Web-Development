import React, { Component } from 'react'

export default class WindowResize extends Component {

constructor(props) {
  super(props);

  this.state = {
     width: window.innerWidth,
     height: window.innerHeight
  };

  this.handleResize = this.handleResize.bind(this)
}

componentDidMount() {
    window.addEventListener('resize', this.handleResize)
}

handleResize() {
    this.setState({
        width: window.innerWidth,
        height: window.innerHeight
    })
}

  render() {
    return (
      <div>
        <h4>WindowResize</h4>
        <h3>Width: {this.state.width}</h3>
        <h3>Height: {this.state.height}</h3>
      </div>
    )
  }
}
