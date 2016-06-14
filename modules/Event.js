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
    var eventRef = new Firebase("https://blistering-torch-7865.firebaseio.com/events/" + day + '/' + id);
    this.bindAsObject(eventRef, "event");
    console.log(eventRef);
    console.log('day:' + day + 'id: ' + id);
  },
  render: function() {
    var event = this.state.event;
    console.log(event);

    return (
      <div>
        <div className="header">
          <div className="row"> 
            <div className="header-logo"><img src={'public/img/logo.png'} /></div>
            <h3 className="header-title">{event.EventName}</h3>
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
