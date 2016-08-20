import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  properties: [],
  localesByProperty: {},
  localesByDelimiter: {},
  viewing: null,
  dedup: false,
  loading: false,
  error: null
})

const mapLocalesToDelimiter = (items) => {
  return items.reduce((a, item) => {
    a[item.delimiter] = a[item.delimiter] ? a[item.delimiter].concat(item) : [item]
    return a
  }, {})
}

const requestLocales = (state, action) => {
  return state
    .update('properties', properties => properties.concat(action.property))
    .set('viewing', action.property)
    .set('loading', true)
}

const receiveLocales = (state, action) => {
  return state
    .setIn(['localesByProperty', action.search], action.results)
    .setIn(['localesByDelimiter', action.search], mapLocalesToDelimiter(action.results))
    .set('loading', false)
}

const receiveLocalesFailure = (state, action) => {
  return state
    .set('loading', false)
    .set('error', action.error)
}

const changeProperty = (state, action) => {
  return state
    .set('viewing', action.property)
}

const toggleDedupView = (state, action) => {
  return state
    .set('dedup', !state.dedup)
}

const ACTION_HANDLERS = {
  [Types.REQUEST_LOCALES]: requestLocales,
  [Types.RECEIVE_LOCALES]: receiveLocales,
  [Types.RECEIVE_LOCALES_FAILURE]: receiveLocalesFailure,
  [Types.CHANGE_PROPERTY]: changeProperty,
  [Types.TOGGLE_DEDUP_VIEW]: toggleDedupView
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
