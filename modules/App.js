import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return( 
      <div>
        <div className="row">
          <ul role="nav" className="nav">
            <li className="nav-item"><NavLink to="/packlist">Reminders</NavLink></li>
            <li className="nav-item"><NavLink to="/events">Schedule</NavLink></li>
            <li className="nav-item"><NavLink to="/hotel">Map</NavLink></li>
          </ul>
          <h2></h2>
        </div>

        {this.props.children || <Events/>}

      </div>
    )
  }
})
