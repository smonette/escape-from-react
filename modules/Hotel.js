// modules/About.js
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <div className="header-wedgie"></div>
  
        <div className="row">
          <h2>Hyatt Regency Lake Tahoe</h2>
          <p><a href="https://www.google.com/maps/place/111+Country+Club+Dr,+Incline+Village,+NV+89451/data=!4m2!3m1!1s0x80997046edfad325:0x670742713cc0b7f0?sa=X&ved=0ahUKEwitvt_t09DMAhUI44MKHfZAA-0Q8gEIJjAB">111 Country Club Dr, Incline Village, NV 89451</a></p>

          <h3>Proprty Map</h3>
          <p>It's near a lake. Look at this map too see where you need to go to attend different events.</p>
          <img src="http://placehold.it/350x350&text=im+a+map" />
        </div>
      </div>
    ) 
  }
})