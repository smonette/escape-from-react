import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Hotel from './modules/Hotel'
import Packlist from './modules/Packlist'
import Freetime from './modules/Freetime'
import Events from './modules/Events'
import Event from './modules/Event'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Events}/>

      <Route path="/events" component={Events}/>
        <Route path="/events/:eventDay/:eventId" component={Event}/>
      
      <Route path="/hotel" component={Hotel}/>
      <Route path="/packlist" component={Packlist}/>
      <Route path="/freetime" component={Freetime}/>
    
    </Route>
  </Router>
), document.getElementById('app'))