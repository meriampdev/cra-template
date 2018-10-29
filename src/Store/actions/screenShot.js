import { TAKE_SCREEN_SHOT } from '../actionTypes'

export function onTakeScreenShot(data) {
  return {
    type: TAKE_SCREEN_SHOT,
    payload: data
  }
}
