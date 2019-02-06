import { takeLatest, put } from 'redux-saga/effects'

import { Types } from '../actionCreators'

import ActionCreators from '../actionCreators'

import { login, auth, destroyAuth, updateProfile, createProfile } from './auth'

import { getRuns, createRuns, deleteRuns } from './runs'

import { getUsers, getUserById, deleteUsers, updateUser } from './users'

import Api from './../../services/api'

export default function* rootSagas() {

    const api = Api('http://localhost:3005')
    
    //Auth
    yield takeLatest(Types.SIGNIN_REQUEST, login)
    yield takeLatest(Types.AUTH_REQUEST, auth({ api }))
    yield takeLatest(Types.UPDATE_PROFILE_REQUEST, updateProfile({ api }))
    yield takeLatest(Types.CREATE_PROFILE_REQUEST, createProfile({ api }))
    yield takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth)
    yield put(ActionCreators.authRequest())

    //Runs
    yield takeLatest(Types.GET_RUNS_REQUEST, getRuns({ api }))
    yield takeLatest(Types.CREATE_RUNS_REQUEST, createRuns({ api }))
    yield takeLatest(Types.DELETE_RUNS_REQUEST, deleteRuns({ api }))

    //Users
    yield takeLatest(Types.GET_USERS_REQUEST, getUsers({ api }))
    yield takeLatest(Types.GET_USER_BY_ID_REQUEST, getUserById({ api }))
    yield takeLatest(Types.DELETE_USERS_REQUEST, deleteUsers({ api }))
    yield takeLatest(Types.UPDATE_USER_REQUEST, updateUser({ api }))
} 