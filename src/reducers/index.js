import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user from './user'
import tasks from './tasks'

const rootReducer = combineReducers({ user, tasks, routing: routerReducer })

export default rootReducer
