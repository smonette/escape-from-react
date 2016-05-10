// modules/Event.js
import React from 'react'


export default React.createClass({
  mixins: [ReactFireMixin],
  
  componentWillMount: function() {
    var ref = new Firebase("https://blistering-torch-7865.firebaseio.com/events/7");
    this.bindAsObject(ref, "event");
  },
  render: function() {
    return (
    <div>
      <h2>EVENT! {event.EventName}</h2>
    </div>
    )

  }
});