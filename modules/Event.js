// modules/Event.js
import React from 'react'


export default React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return { event: {} };
  },

  componentWillMount: function() {
    var id = this.props.params.eventId;
    var day = this.props.params.eventDay;
    var eventRef = new Firebase("https://blistering-torch-7865.firebaseio.com/events/" + day + id);
    this.bindAsObject(eventRef, "event");
  },
  render: function() {
    var event = this.state.event;

    return (
      <div>
        <div className="header">
          <div className="row"> 
            <div className="header-logo"><img src={'public/img/logo.png'} /></div>
            <h3 className="header-title">EVENT NAME HERE</h3>
          </div>
        </div>

        <div className="header-wedgie"></div>
        <div className="row">
          <div>{event.EventDay}, {event.EventStart}</div>
          <h2>{event.EventName}</h2>
          <p>{event.EventDescription}</p>

          <h3>What should I wear?</h3>
          <p>{event.EventAttire}</p>
        </div>
      </div>
      );
  }
});
