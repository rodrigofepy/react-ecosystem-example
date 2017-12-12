import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all, fork } from 'redux-saga/effects'

import languageProviderReducer from 'containers/LanguageProvider/reducer'
import homeReducer from 'containers/HomePage/reducer'
import homeSaga from 'containers/HomePage/saga'

const sagas = [homeSaga]

function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)))
}

const rootReducer = combineReducers({
  home: homeReducer,
  language: languageProviderReducer
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
)

sagaMiddleware.run(rootSaga)

export default store
