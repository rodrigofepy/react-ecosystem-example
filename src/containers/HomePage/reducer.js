import { GET_RANDOM_COLORS_OK, SET_SENDING_REQUEST } from './constants'

const initialState = {
  data: {
    colors: []
  },
  sendingRequest: false
}

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RANDOM_COLORS_OK:
      return { ...state, data: Object.assign({}, state.data, action.data) }

    case SET_SENDING_REQUEST:
      return { ...state, sendingRequest: action.sendingRequest }

    default:
      return state
  }
}
