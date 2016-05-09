// modules/Repos.js
import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <div>
        <h2>Events</h2>
        <h3>Friday</h3>
        <ul>
          <li><Link to="/events/friday/check-in">Hotel Check in</Link></li>
          <li><Link to="/events/friday/white-party">White Party Dinner</Link></li>
        </ul>
        <h3>Saturday</h3>
        <ul>
          <li><Link to="/events/saturday/brunch">Greasy Brunch</Link></li>
          <li><Link to="/events/saturday/beach-party">Beach Olympics and Party</Link></li>
          <li><Link to="/events/sunday/black-tie">Black tie dinner party</Link></li>
        </ul>
        <h3>Sunday</h3>
        <ul>
          <li><Link to="/events/sunday/departure">Go home</Link></li>
        </ul>
      </div>
    )
  }
})
