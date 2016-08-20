// Needed for redux-saga es6 generator support
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyRouterMiddleware, Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import useScroll from 'react-router-scroll'
import configureStore from './Store'

const initialState = {}
const store = configureStore(initialState, browserHistory)

if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  window.devToolsExtension.updateStore(store)
}

const history = syncHistoryWithStore(browserHistory, store)

import App from 'Containers/App'
import createRoutes from './Navigation'
const routes = {
  component: App,
  childRoutes: createRoutes(store)
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router
        history={history}
        routes={routes}
        render={
          applyRouterMiddleware(useScroll())
        }
      />
    </Provider>,
    document.getElementById('app')
  )
}

render()
