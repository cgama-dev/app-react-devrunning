import { Types } from '../actionCreators'

import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = {
    isLoading: false,
    error: false,
    data: [],
    saved: false,
    isSaving: false
}


export const getRunsRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
        error: false
    }
}
export const getRunsSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        error: false,
        data: action.runs
    }
}
export const getRunsFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        error: true

    }
}

export const createRunsRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        saved: false,
        isSaving: true,
        error: false
    }
}

export const createRunsSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        saved: true,
        isSaving: false,
        error: false
    }
}

export const createRunsFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        saved: false,
        isSaving: false,
        error: true
    }
}

export const createRunsReset = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        saved: false,
        isSaving: false
    }
}

export const deleteRunsRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        saved: false,
        isSaving: true,
        error: false
    }
}

export const deleteRunsSuccess = (state = INITIAL_STATE, action) => {
    let runs = [...state.data]
    
    const idRun = action.id
    
    runs = runs.filter((item) => item.id !== idRun)

    return {
        ...state,
        isSaving: false,
        data: runs
    }
}

export const deleteRunsFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        saved: false,
        isSaving: false,
        error: true
    }
}

export const HANDLERS = {
    [Types.GET_RUNS_REQUEST]: getRunsRequest,
    [Types.GET_RUNS_SUCCESS]: getRunsSuccess,
    [Types.GET_RUNS_FAILURE]: getRunsFailure,

    [Types.CREATE_RUNS_REQUEST]: createRunsRequest,
    [Types.CREATE_RUNS_SUCCESS]: createRunsSuccess,
    [Types.CREATE_RUNS_FAILURE]: createRunsFailure,
    [Types.CREATE_RUNS_RESET]: createRunsReset,


    [Types.DELETE_RUNS_REQUEST]: deleteRunsRequest,
    [Types.DELETE_RUNS_SUCCESS]: deleteRunsSuccess,
    [Types.DELETE_RUNS_FAILURE]: deleteRunsFailure,

}

export default createReducer(INITIAL_STATE, HANDLERS)