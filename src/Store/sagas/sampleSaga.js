import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

import { SAMPLE_ACTION } from '../actionTypes'

const cache = setupCache({
  maxAge: 300000
})
const api = axios.create({
  adapter: cache.adapter
})

function reqSampleAction(data) {
  let url = 'https://jsonplaceholder.typicode.com/todos'
  return api.get(url)
}

export function* sampleAction(action) {
  try {
    let response = yield call(reqSampleAction, action.payload)
    // let fromCache = response.request.fromCache
    console.log('fromCache', response)
    yield put({ type: `${SAMPLE_ACTION}_SUCCESS`, payload: response.data })
  } catch(e) {
    yield put({ type: `${SAMPLE_ACTION}_FAIL}`, payload: e.response })
  }
}
