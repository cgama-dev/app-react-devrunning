import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
    // Login
    signinRequest: ['email', 'passwd'],
    signinSuccess: ['user'],
    signinFailure: ['error'],


    // Autenticação
    authRequest: null,
    authSuccess: ['user'],
    authFailure: null,

    destroyAuthRequest: null,
    destroyAuthSuccess: null,

    //Get Corridas
    getRunsRequest: null,
    getRunsSuccess: ['runs'],
    getRunsFailure: null,

    //Create Corridas
    createRunsReset: null,
    createRunsRequest: ['run'],
    createRunsSuccess: ['run'],
    createRunsFailure: ['error'],
    
    //Delete Corridas
    deleteRunsRequest: ['id'],
    deleteRunsSuccess: ['id'],
    deleteRunsFailure: ['error'],

    //Update Corridas
    updateProfileReset: null,
    updateProfileRequest: ['user'],
    updateProfileSuccess: ['user'],
    updateProfileFailure: ['error'],

    createProfileReset: null,
    createProfileRequest: ['user'],
    createProfileSuccess: ['user'],
    createProfileFailure: ['error']

})

export default Creators