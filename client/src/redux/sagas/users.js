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

export function* getUserById(action) {
    const token = localStorage.getItem('token')

    const idUser = action.id

    const user = yield axios.get(`http://localhost:3005/users/${idUser}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    yield put(ActionsCreators.getUserByIdSuccess(user.data))
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

export function* updateUser(action) {
    const token = localStorage.getItem('token')
    const userToSave = {
        ...action.user
    }

    yield axios.patch(`http://localhost:3005/users/${action.user.id}`, userToSave, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    yield put(ActionsCreators.updateUserSuccess(userToSave))
}