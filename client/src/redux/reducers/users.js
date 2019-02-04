import { Types } from '../actionCreators'

import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = {
    isLoading: false,
    error: false,
    data: [],
    saved: false,
    isSaving: false,
    user:{}
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

export const getUserByIdRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
        error: false
    }
}

export const getUserByIdSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        error: false,
        user: action.user
    }
}
export const getUserByIdFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        error: true

    }
}

export const updateUserRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        error: false,
        errorMessage: '',
        saved: false
    }
}

export const updateUserSuccess = (state = INITIAL_STATE, action) => {

    const newUser = {
        ...state.user
    }

    Object.keys(action.user).forEach(key => {
        newUser[key] = action.user[key]
    })

    return {
        ...state,
        user: newUser,
        isSaving: false,
        error: false,
        saved: true
    }
}

export const updateUserFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        error: true,
        errorMessage: action.error,
        saved: false
    }
}

export const updateUserReset = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: false,
        saved: false
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
    
    
    [Types.GET_USER_BY_ID_REQUEST]: getUserByIdRequest,
    [Types.GET_USER_BY_ID_SUCCESS]: getUserByIdSuccess,
    [Types.GET_USER_BY_ID_FAILURE]: getUserByIdFailure,

    [Types.UPDATE_USER_REQUEST]: updateUserRequest,
    [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
    [Types.UPDATE_USER_FAILURE]: updateUserFailure,
    [Types.UPDATE_USER_RESET]: updateUserReset,

    [Types.DELETE_USERS_REQUEST]: deleteUsersRequest,
    [Types.DELETE_USERS_SUCCESS]: deleteUsersSuccess,
    [Types.DELETE_USERS_FAILURE]: deleteUsersFailure,


}

export default createReducer(INITIAL_STATE, HANDLERS)