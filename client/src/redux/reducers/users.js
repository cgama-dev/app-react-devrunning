import { Types } from '../actionCreators'

import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = {
    isLoading: false,
    error: false,
    data: [],
    saved: false,
    isSaving: false
}


export const getUsersRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
        error: false
    }
}
export const getUsersSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        error: false,
        data: action.users
    }
}
export const getUsersFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        error: true

    }
}

export const deleteUsersRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        saved: false,
        isSaving: true,
        error: false
    }
}

export const deleteUsersSuccess = (state = INITIAL_STATE, action) => {
    let users = [...state.data]

    const idUser = action.id

    users = users.filter((item) => item.id !== idUser)

    return {
        ...state,
        isSaving: false,
        data: users
    }
}

export const deleteUsersFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        saved: false,
        isSaving: false,
        error: true
    }
}

export const HANDLERS = {
    [Types.GET_USERS_REQUEST]: getUsersRequest,
    [Types.GET_USERS_SUCCESS]: getUsersSuccess,
    [Types.GET_USERS_FAILURE]: getUsersFailure,

    [Types.DELETE_USERS_REQUEST]: deleteUsersRequest,
    [Types.DELETE_USERS_SUCCESS]: deleteUsersSuccess,
    [Types.DELETE_USERS_FAILURE]: deleteUsersFailure

}

export default createReducer(INITIAL_STATE, HANDLERS)