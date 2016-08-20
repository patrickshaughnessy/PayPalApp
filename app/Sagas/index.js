import { fork } from 'redux-saga/effects'
import API from '../Services/Api'
import LocaleSaga from './LocaleSaga'

const api = API.create()

export default function * root () {
  yield fork(LocaleSaga(api).watcher)
}
