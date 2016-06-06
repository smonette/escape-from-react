// modules/Repos.js
import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return { item: {} };
  },
  componentWillMount: function() {
    var ref1 = new Firebase("https://blistering-torch-7865.firebaseio.com/events/Friday");
    this.bindAsArray(ref1, "fridayEvents");

    var ref2 = new Firebase("https://blistering-torch-7865.firebaseio.com/events/Saturday");
    this.bindAsArray(ref2, "saturdayEvents");

    var ref3 = new Firebase("https://blistering-torch-7865.firebaseio.com/events/Sunday");
    this.bindAsArray(ref3, "sundayEvents");
  },
  render: function() {

    var fridayEvents = this.state.fridayEvents.map(function(event) {
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

     var saturdayEvents = this.state.saturdayEvents.map(function(event) {
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


   var sundayEvents = this.state.sundayEvents.map(function(event) {
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


    return (
      <div>
        <div>
          <h2>Friday</h2>
          { fridayEvents }
        </div>

        <div>
          <h2>Saturday</h2>
          { saturdayEvents }
        </div>

        <div>
          <h2>Sunday</h2>
          { sundayEvents }
        </div>

      </div>

      );



  }
});

