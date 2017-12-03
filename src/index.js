import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import store from './store'

const App = () => <h1>Hello World!</h1>

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
