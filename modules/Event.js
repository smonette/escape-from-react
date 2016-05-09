// modules/Event.js
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Event name: {this.props.params.eventName}</h2>
        <p>Oh wow. How stoked are you for {this.props.params.eventName}? {this.props.params.eventName} is gonna be SOOOOOO COOOL OMGGGGG </p>
      </div>
    )
  }
})