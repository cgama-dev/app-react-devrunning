import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
    // Login
    signinRequest: ['email', 'passwd'],
    signinSuccess: ['user'],
    signinFailure: ['error'],
    
    
    // Autenticação
    authRequest: null,
    authSuccess: ['user'],
    authFailure: null
})

export default Creators