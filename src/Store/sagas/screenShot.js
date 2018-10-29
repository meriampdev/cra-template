import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

import { TAKE_SCREEN_SHOT } from '../actionTypes'

const cache = setupCache({
  maxAge: 300000
})
const api = axios.create({
  adapter: cache.adapter
})

function reqTakeScreenShot(data) {
  let url = '/screenCapture'
  return api.post(url, data)
}

export function* takeScreenShot(action) {
  try {
    let response = yield call(reqTakeScreenShot, action.payload)
    let fromCache = response.request.fromCache
    console.log('fromCache', response)
    yield put({ type: `${TAKE_SCREEN_SHOT}_SUCCESS`, payload: response.data })
  } catch(e) {
    yield put({ type: `${TAKE_SCREEN_SHOT}_FAIL}`, payload: e.response })
  }
}
