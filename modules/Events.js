// modules/Repos.js
import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  mixins: [ReactFireMixin],
  componentWillMount: function() {
    var ref = new Firebase("https://blistering-torch-7865.firebaseio.com/events");
    this.bindAsArray(ref, "events");
  },
  render: function() {
    var events = this.state.events.map(function(event) {
    return (
        <li key={ event['.key'] }>
          <Link to={"events/" + event['.key'] + "/" + event.EventDay + "/" + event.EventSlug }>
            { event.EventDay }, { event.EventStart } - { event.EventName }
          </Link>
        </li>
      );
    });
    return <ul>{ events }</ul>;

  }
});

