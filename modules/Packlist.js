// modules/About.js
import React from 'react'


export default React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return { packItem: {} };
  },
  componentWillMount: function() {
    var ref = new Firebase("https://blistering-torch-7865.firebaseio.com/packlist");
    this.bindAsArray(ref, "packItems");
  },
  render: function() {
    var packItems = this.state.packItems.map(function(packItem) {
    return (
        <li key={ packItem ['.key'] }>{ packItem.item } </li>
      );
    });

    return(
      <div>
        <div className="header">
          <div className="row"> 
            <div className="header-logo"><img src={'public/img/logo.png'} /></div>
            <h3 className="header-title">Event Info &amp; Packing List</h3>
          </div>
        </div>
        <div className="content reminders">

          <div className="backdrop">
            <div className="backdrop_packlist"></div>
          </div>

          <div className="row">
            <h2>Welcome to your Escape!</h2>
            <p>Pack your bags for a weekend getaway like no other! Since we can’t all go to Rio, we’re bringing Rio to us&mdash;Tahoe style.</p>
            <p>Before you hit the road, check the reminders and packing list below to make sure you’ve got everything you need to make a splash on the lake.</p>
            
            <h2>Reminders</h2>
            <p>We will be doing X for the Y, so be sure to Z.</p>
            <p>The α will be β, so γ your θ.</p>
            <p>And here’s another reminder!</p>
                      

            <h2>Packing list</h2>
            <h3>Attire</h3>
            <ul>
                <li>A shirt</li>
                <li>A swimsuit</li>
                <li>A cute dress</li>
                <li>White stuff</li>
                <li>Formal wear with Brazilian flair</li>
                <li>A thing that takes more space to describe than the other things</li>
                <li>Another thing</li>
            </ul>
            
            <h3>Accessories</h3>
            <ul>
              <li>A sandal</li>
              <li>Sunglasses</li>
              <li>Another sandal</li>
              <li>Sunblock</li>
              <li>Walking shoes</li>
              <li>And another thing</li>
            </ul>

          </div>
        </div>
        </div>

    )

  }
});

