import axios from 'axios'

import { put } from 'redux-saga/effects'

import ActionsCreators from '../actionCreators'

export function* getUsers() {
    const token = localStorage.getItem('token')

    const users = yield axios.get(`http://localhost:3005/users`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    yield put(ActionsCreators.getUsersSuccess(users.data))
}

export function* deleteUsers(action) {
    const token = localStorage.getItem('token')

    yield axios.delete(`http://localhost:3005/users/${action.id}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    yield put(ActionsCreators.deleteUsersSuccess(action.id))
}