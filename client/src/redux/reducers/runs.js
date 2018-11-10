import { Types } from '../actionCreators'

import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = {
    isLoading: false,
    error: false,
    data: []
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



export const HANDLERS = {
    [Types.GET_RUNS_REQUEST]: getRunsRequest,
    [Types.GET_RUNS_SUCCESS]: getRunsSuccess,
    [Types.GET_RUNS_FAILURE]: getRunsFailure
}

export default createReducer(INITIAL_STATE, HANDLERS)