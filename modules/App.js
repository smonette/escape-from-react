import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return( 
      <div>
        <h1>Welcome to Tahoe de Janeiro</h1>
        <ul role="nav">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/packlist">Packlist</NavLink></li>
        </ul>

        {this.props.children || <Home/>}

      </div>
    )
  }
})
