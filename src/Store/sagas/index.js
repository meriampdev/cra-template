import { all, takeLatest } from 'redux-saga/effects'

import {
  SAMPLE_ACTION
} from '../actionTypes'

import { sampleAction } from './sampleSaga'

export default function* rootSaga() {
  yield all([
    takeLatest(SAMPLE_ACTION, sampleAction)
  ])
}
