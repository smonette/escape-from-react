// modules/About.js
import React from 'react'


export default React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return { freetimeActivity: {} };
  },
  componentWillMount: function() {
    var ref = new Firebase("https://blistering-torch-7865.firebaseio.com/freetime");
    this.bindAsArray(ref, "freetimeActivites");
  },
  render: function() {
    var freetimeActivites = this.state.freetimeActivites.map(function(freetimeActivity) {
    return (
        <li key={ freetimeActivity ['.key'] }>
          <h4>{ freetimeActivity.ActivityName }</h4>
          { freetimeActivity.ActivityDescription } 
          { freetimeActivity.ActivityLink } 
        </li>
      );
    });

    return(
      <div>
        <div className="header">
          <div className="row"> 
            <div className="header-logo"><img src={'public/img/logo.png'} /></div>
            <h3 className="header-title">FREETIME ACTIVITIES</h3>
          </div>
        </div>

        <div className="content">
          <div className="row">
            <h2>Free time activities</h2>
            <h3>Why don't you explore Tahoe?</h3>
            <ul>{ freetimeActivites }</ul>
          </div>
        </div>
      </div>
    )

  }
});

