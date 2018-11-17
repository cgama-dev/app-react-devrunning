import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import ActionCretor from './../../redux/actionCreators'

import { Form, Button } from 'semantic-ui-react'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            form: {
                email: '',
                passwd: ''
            }
        }

    }


    handleChange = fieldname => event => {
        const form = {
            ...this.state.form
        }

        form[fieldname] = event.target.value

        this.setState({
            form
        })
    }

    login = () => {
        const { email, passwd } = this.state.form

        this.props.login(email, passwd)
    }

    render() {
        if (this.props.auth.isAuth) {
            if (this.props.auth.user.role === 'admin') {
                return <Redirect to='/admin' />
            }

            return <Redirect to='/restrito' />

        }
        return (
            <div>
                <div><h1> Entrar</h1></div>
                <Form>
                    <Form.Field>
                        <label>E-mail</label>
                        <input type="text" name="email" value={this.state.form.email} onChange={this.handleChange('email')} />
                    </Form.Field>
                    <Form.Field>
                        <label>Senha</label>
                        <input type="password" name="passwd" value={this.state.form.passwd} onChange={this.handleChange('passwd')} />
                    </Form.Field>
                    <Button type="button" onClick={this.login}>Logar</Button>
                    {
                        this.props.auth.error &&
                        <p> Erro ao Logar </p>
                    }
                    {
                        this.props.auth.isAuth &&
                        <p> Usuário Logado </p>
                    }
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, passwd) => dispatch(ActionCretor.signinRequest(email, passwd))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)