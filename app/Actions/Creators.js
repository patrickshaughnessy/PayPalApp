import Types from './Types'

const requestLocales = (property) => ({ type: Types.REQUEST_LOCALES, ...property })
const receiveLocales = (payload) => ({ type: Types.RECEIVE_LOCALES, ...payload })
const receiveLocalesFailure = (payload) => ({ type: Types.RECEIVE_LOCALES_FAILURE, ...payload })

const changeProperty = (property) => ({ type: Types.CHANGE_PROPERTY, property })
const toggleDedupView = () => ({ type: Types.TOGGLE_DEDUP_VIEW })
const deleteProperty = (property) => ({ type: Types.DELETE_PROPERTY, property })

export default {
  requestLocales,
  receiveLocales,
  receiveLocalesFailure,
  changeProperty,
  toggleDedupView,
  deleteProperty
}
