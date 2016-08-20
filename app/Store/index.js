import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { stateTransformer } from 'redux-seamless-immutable'
import createLogger from 'redux-logger'

// import createReducer from './reducers'
import rootReducer from '../Reducers'
import sagas from '../Sagas'

const sagaMiddleware = createSagaMiddleware()
const devtools = window.devToolsExtension || (() => noop => noop)
const loggerMiddleware = createLogger({
  stateTransformer
})

export default function configureStore (initialState = {}, history) {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
  ]

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware)
  }

  const enhancers = compose(
    applyMiddleware(...middlewares),
    devtools()
  )

  const store = createStore(
    rootReducer(),
    enhancers
  )

  sagaMiddleware.run(sagas)

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('../Reducers', () => {
      System.import('../Reducers').then((reducerModule) => {
        const createReducers = reducerModule.default
        const nextReducers = createReducers()

        store.replaceReducer(nextReducers)
      })
    })
  }

  return store
}
