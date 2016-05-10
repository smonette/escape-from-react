// modules/Event.js
import React from 'react'


export default React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return { event: {} };
  },

  componentWillMount: function() {
    var id = this.props.params.eventId;
    var eventRef = new Firebase("https://blistering-torch-7865.firebaseio.com/events/" + id);
    this.bindAsObject(eventRef, "event");
    console.log("this: " + this)
    console.log("ref: " + eventRef)
  },
  render: function() {
    var event = this.state.event;

    return (
        <div>
          <div>{event.EventDay}, {event.EventStart}</div>
          <h2>{event.EventName}</h2>
          <p>{event.EventDescription}</p>

          <h3>Special Attire?</h3>
          <p>{event.EventAttire}</p>
        </div>
      );
  }
});
