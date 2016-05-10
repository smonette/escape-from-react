import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return( 
      <div>
        <h1>Welcome to Tahoe de Janeiro</h1>
        <ul role="nav" className="nav">
          <li  className="nav-item"><NavLink to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink to="/hotel">Hotel</NavLink></li>
          <li className="nav-item"><NavLink to="/events">Events</NavLink></li>
          <li className="nav-item"><NavLink to="/packlist">Packlist</NavLink></li>
          <li className="nav-item"><NavLink to="/freetime">Free time activities</NavLink></li>
        </ul>

        {this.props.children || <Home/>}

      </div>
    )
  }
})
