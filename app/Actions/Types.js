// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`
  REQUEST_LOCALES
  RECEIVE_LOCALES
  RECEIVE_LOCALES_FAILURE

  CHANGE_PROPERTY
  TOGGLE_DEDUP_VIEW
  DELETE_PROPERTY
`)
