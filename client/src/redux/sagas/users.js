import axios from 'axios'

import { put, call } from 'redux-saga/effects'

import ActionsCreators from '../actionCreators'

export const getUsers = ({ api }) => function* () {
    const token = localStorage.getItem('token')

    const users = yield call(api.getUsers)

    yield put(ActionsCreators.getUsersSuccess(users.data))
}

export const getUserById = ({ api }) => function* (action) {
    const idUser = action.id

    const user = yield call(api.getUserById, idUser)

    yield put(ActionsCreators.getUserByIdSuccess(user.data))
}

export const deleteUsers = ({ api }) => function* (action) {
    const token = localStorage.getItem('token')

    const idUser = action.id

    yield call(api.deleteUsers, idUser)

    yield put(ActionsCreators.deleteUsersSuccess(idUser))
}

export const updateUser = ({ api }) => function* (action) {
    const token = localStorage.getItem('token')
    const userToSave = {
        ...action.user
    }

    yield call(api.updateUsers, action.user.id, userToSave)

    yield put(ActionsCreators.updateUserSuccess(userToSave))
}