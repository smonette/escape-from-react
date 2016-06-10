import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return( 
      <div>
        <div className="header">
          <div className="row"> 
            <div className="header-logo"><img src={'public/img/logo.png'} /></div>
          </div>
        </div>

        <div className="row">
          <ul role="nav" className="nav">
            <li className="nav-item"><NavLink to="/packlist">Reminders</NavLink></li>
            <li className="nav-item"><NavLink to="/events">Events</NavLink></li>
            <li className="nav-item"><NavLink to="/hotel">Map</NavLink></li>
          </ul>
        </div>

        {this.props.children || <Events/>}

      </div>
    )
  }
})
