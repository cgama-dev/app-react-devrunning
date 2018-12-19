import { takeLatest, put } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'

import axios from 'axios'

import jwtDecode from 'jwt-decode'

export function* login(action) {
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

export function* auth() {
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

export function* updateProfile(action) {
    const token = localStorage.getItem('token')
    const user = action.user
    const runs = yield axios.patch(`http://localhost:3001/users/${user.id}`, {
        unit: action.user.unit,
        timezone: action.user.timezone
    },{
        headers: {
            Authorization: 'Bearer '+ token
        }
    })

    console.log(user)
}

export function* destroyAuth() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    yield put(ActionCreators.destroyAuthSuccess())

}