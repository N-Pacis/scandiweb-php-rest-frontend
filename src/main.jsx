import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import App from './App'
import './index.css'
import rootReducer from './reducers'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
