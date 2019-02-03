import React from 'react'
import { connect } from 'react-redux'
import ActionsCreators from './../../../redux/actionCreators'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

const Header = (props) => {
    return (
        <Menu>
            <Menu.Item as={Link} to='/restrito'><Image src={'/logo.png'} size='small' /></Menu.Item>
            <Menu.Item as={Link} to='/restrito'>Home</Menu.Item>
            <Menu.Item as={Link} to='/restrito/runs'>Corridas</Menu.Item>
            <Menu.Menu position="right">
                <Dropdown item text={props.auth.user.name}>
                    <Dropdown.Menu>
                    {
                        props.auth.user.role === 'admin' &&
                        <Dropdown.Item as={Link} to={'/admin/home'}> Modo: admin</Dropdown.Item>
                    }
                        <Dropdown.Item as={Link} to={'/restrito/my-account'}> Minha Conta</Dropdown.Item>
                        <Dropdown.Item as={Link} to={'/restrito/change-password'}> Alterar Senha</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.logout()}> Sair</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signin: (email, senha) => dispatch(ActionsCreators.signinRequest(email, senha)),
        logout: () => dispatch(ActionsCreators.destroyAuthRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)