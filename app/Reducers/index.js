import { combineReducers, routerReducer } from 'redux-seamless-immutable'

import LocaleReducer from './LocaleReducer'

export default function createReducer () {
  return combineReducers({
    routing: routerReducer,
    locales: LocaleReducer
  })
}
