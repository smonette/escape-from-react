// modules/About.js
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <div className="header">
          <div className="row"> 
            <div className="header-logo"><img src={'public/img/logo.png'} /></div>
            <h3 className="header-title">Venue Map</h3>
          </div>
        </div>
        <div className="content">
          <div className="map-link">
            <a href="https://www.google.com/maps/place/111+Country+Club+Dr,+Incline+Village,+NV+89451/data=!4m2!3m1!1s0x80997046edfad325:0x670742713cc0b7f0?sa=X&ved=0ahUKEwitvt_t09DMAhUI44MKHfZAA-0Q8gEIJjAB">
             <p>Hyatt Regency Lake Tahoe<br/>111 Country Club Dr<br/>Incline Village, NV 89451</p>
            </a>
          </div>
          <div className="map-container">
            <img src={"public/img/map.png"} />
          </div>
        </div>
      </div>
    ) 
  }
})