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

    //Corridas
    getRunsRequest: null,
    getRunsSuccess: ['runs'],
    getRunsFailure: null,

    createRunsRequest: ['run'],
    createRunsSuccess: ['run'],
    createRunsFailure: ['erro']

})

export default Creators