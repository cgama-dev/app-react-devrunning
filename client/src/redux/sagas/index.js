import { takeLatest, put } from 'redux-saga/effects'

import { Types } from '../actionCreators'

import ActionCreators from '../actionCreators'

import axios from 'axios'

import jwtDecode from 'jwt-decode'

function* login(action) {
    let token = localStorage.getItem('token')

    const login = yield axios.post('http://localhost:3001/users/login', {
        email: action.email,
        passwd: action.passwd
    })

    if (login.data.token) {
        token = login.data.token
        localStorage.setItem('token', token)

        const user = jwtDecode(token)
        localStorage.setItem('user', user)

        yield put(ActionCreators.signinSuccess(user))

    } else {
        yield put(ActionCreators.signinFailure(login.data.message))
    }
}

function* auth() {
    const token = localStorage.getItem('token')

    if (token) {
        try {

            const user = jwtDecode(token)
            yield put(ActionCreators.authSuccess(user))
        } catch (err) {

            yield put(ActionCreators.authFailure('invalide token'))
        }

    } else {
        yield put(ActionCreators.authFailure('no token'))
    }
}

export default function* rootSagas() {

    yield takeLatest(Types.SIGNIN_REQUEST, login)
    yield takeLatest(Types.AUTH_REQUEST, auth)
    yield put(ActionCreators.authRequest())
}