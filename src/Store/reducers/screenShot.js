import { TAKE_SCREEN_SHOT } from '../actionTypes'

const INITIAL_STATE = {
  screenshot: null,
  error: null,
  processing: false
}

export default function (state=INITIAL_STATE, action){
  switch(action.type) {
    case TAKE_SCREEN_SHOT:
      return { ...state, processing: true, error: null }
    case `${TAKE_SCREEN_SHOT}_SUCCESS`:
      return { ...state, processing: false, error: null, screenshot: action.payload }
    case `${TAKE_SCREEN_SHOT}_FAIL`:
      return { ...state, screenshot: null, processing: false, error: action.payload }
    default:
      return state
  }
}
