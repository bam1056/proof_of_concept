import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import Home from './components/Home'
import Task from './components/Task'
import Main from './components/Main'
import Calendar from './components/Calendar'
import Tasklist from './components/Tasklist'
import Profile from './components/Profile'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

const root = <Provider store={store}>
  <Router history={history}>
    <Route component={Root}>
      <Route path='/' component={Home} />
      <Route path='/tasks(/:currentTask)' component={Task} />
      <Route path='/work' component={Main} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/todolist' component={Tasklist} />
      <Route path='/profile' component={Profile} />
    </Route>
  </Router>
</Provider>
render(root, document.getElementById('root'))
