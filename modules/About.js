// modules/About.js
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>This is a page about Slalom Escape</h2>
        <p>And this might be some interesting explanatory text around it.</p>
        <h3>The hotel</h3>
        <p>It's near a lake. Look at this map for more specific details</p>
        <img src="http://placehold.it/350x350&text=im+a+map" />
      </div>
    ) 
  }
})