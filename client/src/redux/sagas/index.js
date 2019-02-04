import { takeLatest, put } from 'redux-saga/effects'

import { Types } from '../actionCreators'

import ActionCreators from '../actionCreators'

import { login, auth, destroyAuth, updateProfile, createProfile } from './auth'

import { getRuns, createRuns, deleteRuns } from './runs'

import { getUsers, getUserById, deleteUsers, updateUser } from './users'


export default function* rootSagas() {

    //Auth
    yield takeLatest(Types.SIGNIN_REQUEST, login)
    yield takeLatest(Types.AUTH_REQUEST, auth)
    yield takeLatest(Types.UPDATE_PROFILE_REQUEST, updateProfile)
    yield takeLatest(Types.CREATE_PROFILE_REQUEST, createProfile)
    yield takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth)
    yield put(ActionCreators.authRequest())

    //Runs
    yield takeLatest(Types.GET_RUNS_REQUEST, getRuns)
    yield takeLatest(Types.CREATE_RUNS_REQUEST, createRuns)
    yield takeLatest(Types.DELETE_RUNS_REQUEST, deleteRuns)
    
    //Users
    yield takeLatest(Types.GET_USERS_REQUEST, getUsers)
    yield takeLatest(Types.GET_USER_BY_ID_REQUEST, getUserById)
    yield takeLatest(Types.DELETE_USERS_REQUEST, deleteUsers)
    yield takeLatest(Types.UPDATE_USER_REQUEST, updateUser)
} 