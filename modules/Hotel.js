// modules/About.js
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>This is a page about the hotel</h2>
        <p>And this might be some interesting explanatory text around escape. Escape is in Lake Tahoe.</p>
        <img src="http://www.tahoesbest.com/sites/default/files/lake-tahoe-landing-32.jpg?1334953710" />
        <h3>The hotel</h3>
        <p>It's near a lake. Look at this map too see where you need to go to attend different events.</p>
        <img src="http://placehold.it/350x350&text=im+a+map" />
      </div>
    ) 
  }
})