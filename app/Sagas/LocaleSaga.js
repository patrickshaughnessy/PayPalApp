import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

// attempts to login
export default (api) => {
  function * worker (property) {
    const response = yield call(api.getLocales, property)

    if (response.ok) {
      const { results } = response.data
      yield put(Actions.receiveLocales({ search: property, results }))
    } else {
      const { status, problem } = response
      yield put(Actions.receiveLocalesFailure({ message: problem, status }))
    }
  }

  function * watcher () {
    while (true) {
      const { property } = yield take(Types.REQUEST_LOCALES)
      yield call(worker, property)
    }
  }

  return {
    watcher,
    worker
  }
}
