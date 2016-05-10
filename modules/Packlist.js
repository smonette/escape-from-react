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
        <h2>Packlist</h2>
        <h3>Don't forget your:</h3>
        <ul>{ packItems }</ul>
      </div>
    )

  }
});

