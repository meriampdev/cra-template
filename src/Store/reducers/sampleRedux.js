import { SAMPLE_ACTION } from '../actionTypes'

const INITIAL_STATE = {
  list: null,
  error: null,
  processing: false
}

export default function (state=INITIAL_STATE, action){
  switch(action.type) {
    case SAMPLE_ACTION:
      return { ...state, processing: true, error: null }
    case `${SAMPLE_ACTION}_SUCCESS`:
      return { ...state, processing: false, error: null, list: action.payload }
    case `${SAMPLE_ACTION}_FAIL`:
      return { ...state, processing: false, error: action.payload, list: null }
    default:
      return state
  }
}
