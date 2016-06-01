// modules/Repos.js
import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return { item: {} };
  },
  componentWillMount: function() {
    var ref = new Firebase("https://blistering-torch-7865.firebaseio.com/events");
    this.bindAsArray(ref, "events");
  },
  render: function() {

    var events = this.state.events.map(function(event) {
    return (
        <div key={ event['.key'] } className="event-item" data-day={ event.EventDay } >
          <span className="event-item_start">{ event.EventStart }</span>
          <h3 className="event-item_name">{ event.EventName }</h3>
          <Link to={"events/" + event.EventSlug + "/" + event.EventDay + "/" + event['.key'] }>
            View Details &raquo;
          </Link>
        </div>
      );
    });

    return <div>{ events }</div>;

  }
});

