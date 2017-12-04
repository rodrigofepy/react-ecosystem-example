import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'
import LanguageProvider from './containers/LanguageProvider'
import store from './store'
import { translationMessages } from './i18n'

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <App />
      </LanguageProvider>
    </Provider>,
    document.getElementById('root')
  )
}

if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'))
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/es.js')
      ])
    )
    .then(() => render(translationMessages))
    .catch(err => {
      throw err
    })
} else {
  render(translationMessages)
}
