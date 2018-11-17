import React from 'react'
import { connect } from 'react-redux'
import ActionsCreators from './redux/actionCreators'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Header = (props) => {
    return (
        <Menu>
            <Menu.Item>Corridas Online</Menu.Item>
            <Menu.Item as={Link} to='/'>Home</Menu.Item>
            <Menu.Item as={Link} to='/admin'>Admin</Menu.Item>
            <Menu.Item as={Link} to='/login'>Login</Menu.Item>
            <Menu.Item as={Link} to='/restrito'>Restrito</Menu.Item>
        </Menu>
    )
}

const mapStateToProps = (state) => {
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