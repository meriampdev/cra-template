import { SAMPLE_ACTION } from '../actionTypes'

export function onSampleAction(data) {
  return {
    type: SAMPLE_ACTION,
    payload: data
  }
}
