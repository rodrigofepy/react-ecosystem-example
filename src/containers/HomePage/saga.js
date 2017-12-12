import { call, put, takeLatest } from 'redux-saga/effects'

import { getRandomColorsEndpoint } from 'api/colors'

import { getRandomColorsOk, setSendingRequest } from './actions'
import { GET_RANDOM_COLORS } from './constants'

function* getRandomColors() {
  yield put(setSendingRequest(true))

  let response
  try {
    response = yield call(getRandomColorsEndpoint)
  } catch (error) {
    yield put(setSendingRequest(false))
    return
  }

  yield put(getRandomColorsOk(response.data))
  yield put(setSendingRequest(false))
}

export default function* watchRandomColors() {
  yield takeLatest(GET_RANDOM_COLORS, getRandomColors)
}
