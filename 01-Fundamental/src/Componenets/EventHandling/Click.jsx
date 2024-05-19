import React, { Component } from 'react'

export default class Click extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: this.props.message
        }

        this.updateMessage = this.updateMessage.bind(this)
    }

    updateMessage() {
        console.log(this);
        if(this.state.message === this.state.message.toUpperCase()) {
            this.setState({
                message: this.state.message.toLowerCase()
            })
        }
        else {
            this.setState({
                message: this.state.message.toUpperCase()
            })
        }
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.updateMessage}>Click Me</button>
      </div>
    )
  }
}
