import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducer'

let store = createStore(
  reducer,
  applyMiddleware(thunk)
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
