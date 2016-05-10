import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Home from './modules/Home'
import About from './modules/About'
import Packlist from './modules/Packlist'
import Events from './modules/Events'
import Event from './modules/Event'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

      <Route path="/events" component={Events}/>
        <Route path="/events/:eventId/:eventDay/:eventSlug" component={Event}/>
      
      <Route path="/about" component={About}/>
      <Route path="/packlist" component={Packlist}/>
    
    </Route>
  </Router>
), document.getElementById('app'))