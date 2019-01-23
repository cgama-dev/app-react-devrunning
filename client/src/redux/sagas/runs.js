import axios from 'axios'

import { put } from 'redux-saga/effects'

import ActionsCreators from '../actionCreators'

export function* getRuns() {
    const token = localStorage.getItem('token')

    const runs = yield axios.get('http://localhost:3005/runs', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    yield put(ActionsCreators.getRunsSuccess(runs.data.data))
}

export function* createRuns(action) {
    const token = localStorage.getItem('token')

    const runs = yield axios.post('http://localhost:3005/runs', action.run, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    yield put(ActionsCreators.createRunsSuccess(runs.data))
}

export function* deleteRuns(action) {
    const token = localStorage.getItem('token')

    yield axios.delete(`http://localhost:3005/runs/${action.id}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    yield put(ActionsCreators.deleteRunsSuccess(action.id))
}