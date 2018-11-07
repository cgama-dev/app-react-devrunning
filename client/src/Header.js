import React from 'react'
import { connect } from 'react-redux'
import ActionsCreators from './redux/actionCreators'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            <p>
                <Link to='/admin'>Admin</Link>
                <Link to='/login'>Login</Link>
                <Link to='/restrito'>Restrito</Link>
            </p>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (auth) => {
    return {
        signin: (email, senha) => ActionsCreators.signinRequest(email, senha)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)