import { takeLatest, put } from 'redux-saga/effects'

import { Types } from '../actionCreators'

import ActionCreators from '../actionCreators'

import { login, auth, destroyAuth, updateProfile, createProfile } from './auth'

import { getRuns, createRuns } from './runs'


export default function* rootSagas() {

    yield takeLatest(Types.SIGNIN_REQUEST, login)
    yield takeLatest(Types.AUTH_REQUEST, auth)
    yield takeLatest(Types.GET_RUNS_REQUEST, getRuns)
    yield takeLatest(Types.CREATE_RUNS_REQUEST, createRuns)
    yield takeLatest(Types.UPDATE_PROFILE_REQUEST, updateProfile)
    yield takeLatest(Types.CREATE_PROFILE_REQUEST, createProfile)
    yield takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth)

    yield put(ActionCreators.authRequest())
} 