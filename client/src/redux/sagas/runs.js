import axios from 'axios'

import { put, call } from 'redux-saga/effects'

import ActionsCreators from '../actionCreators'

export const getRuns = ({ api }) => function* (action) {

    let filter = ''

    if (action.admin) {
        filter = "?admin=true"
    }

    const runs = yield call(api.getRuns, filter)

    yield put(ActionsCreators.getRunsSuccess(runs.data.data))
}

export const createRuns = ({ api }) => function* (action) {
    const runs = yield call(api.createRuns, action.run)

    yield put(ActionsCreators.createRunsSuccess(runs.data))
}

export const deleteRuns = ({ api }) => function* (action) {

    yield call(api.deleteRuns, action.id)

    yield put(ActionsCreators.deleteRunsSuccess(action.id))
}