import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
       
        count: 0
      }

      this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState((prevState)=>{
            count: prevState.count + 1
        })
    }
    

  render() {
    return (
      <div>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Count: {this.state.count}</button>
      </div>
    )
  }
}
