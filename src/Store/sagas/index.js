import { all, takeLatest } from 'redux-saga/effects'

import {
  TAKE_SCREEN_SHOT
} from '../actionTypes'

import { takeScreenShot } from './screenShot'

export default function* rootSaga() {
  yield all([
    takeLatest(TAKE_SCREEN_SHOT, takeScreenShot)
  ])
}
