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
        <div className="header">
          <div className="row"> 
            <div className="header-logo"><img src={'public/img/logo.png'} /></div>
          </div>
          <h3 className="header-title"><a href="#friday">Friday</a> <a href="#saturday">Saturday</a> <a href="#sunday">Sunday</a></h3>
        </div>
        <div className="header-wedgie"></div>
  
        <div className="row">
          <div>
            <div className="event-list_header" id="friday">
              <h2 className="event-list_day">Friday</h2>
              <span className="event-list_date">8/19</span>
            </div>
            { fridayEvents }
          </div>

          <div>
            <div className="event-list_header" id="saturday">
              <h2 className="event-list_day">Saturday</h2>
              <span className="event-list_date">8/20</span>
            </div>
            { saturdayEvents }
          </div>

          <div>
            <div className="event-list_header" id="sunday">
              <h2 className="event-list_day">Sunday</h2>
              <span className="event-list_date">8/21</span>
            </div>
            { sundayEvents }
          </div>

        </div>
      </div>
      

      );



  }
});

