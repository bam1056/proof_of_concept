import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Home from './components/Home'
import Task from './components/Task'
import Main from './components/Main'
import Calendar from './components/Calendar'
import Tasklist from './components/Tasklist'
import Profile from './components/Profile'
import { Router, Route, browserHistory } from 'react-router'

const router =
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Home} />
      <Route path='/tasks(/:currentTask)' component={Task} />
      <Route path='/work' component={Main} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/todolist' component={Tasklist} />
      <Route path='/profile' component={Profile} />
    </Route>
  </Router>
render(router, document.getElementById('root'))
