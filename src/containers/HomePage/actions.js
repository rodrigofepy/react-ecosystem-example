import {
  GET_RANDOM_COLORS,
  GET_RANDOM_COLORS_OK,
  SET_SENDING_REQUEST
} from './constants'

export function getRandomColors() {
  return { type: GET_RANDOM_COLORS }
}

export function getRandomColorsOk(data) {
  return { type: GET_RANDOM_COLORS_OK, data }
}

export function setSendingRequest(sendingRequest) {
  return { type: SET_SENDING_REQUEST, sendingRequest }
}
