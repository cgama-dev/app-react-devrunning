import React, { Component } from 'react'

import ActionCreators from './../redux/actionCreators'

import { connect } from 'react-redux'

import { Form, Button, Segment } from 'semantic-ui-react'

import timezones from 'moment-timezone/data/meta/latest'

import { Redirect } from 'react-router-dom'

class CreateAccount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            passwd: '',
            passwd2: '',
            name: '',
            email: '',
            unit: 'metric',
            timezone: '',
            error: ''
        }
    }

    componentDidMount() {
        this.props.reset()
    }

    handleChange = fieldname => event => {
        this.setState({
            [fieldname]: event.target.value
        })
    }

    handleCreateAccount = () => {
        if (this.state.passwd !== this.state.passwd2) {
            this.setState({
                error: 'equal'
            })
        } else if (this.state.passwd.length < 6) {
            this.setState({
                error: 'length'
            })
        } else {
            this.setState({
                error: ''
            })

            this.props.createProfile({
                name: this.state.name,
                email: this.state.email,
                passwd: this.state.passwd,
                unit: this.state.unit,
                timezone: this.state.timezone
            })
        }
    }


    render() {
        if (this.props.auth.isAuth) {
            return <Redirect to='/restrito' />
        }
        return (
            <div>
                <h1>Criar Conta</h1>
                {
                    this.state.error === 'length' &&
                    <Segment color='red'> Senha possui menos que 6 caracteres</Segment>
                }
                {
                    this.state.error === 'equal' &&
                    <Segment color='red'> As senhas não correspondem</Segment>
                }
                {
                    this.props.auth.saved &&
                    <Segment color='green'>Usuário criado com sucesso</Segment>
                }
                {
                    this.props.auth.error && this.props.auth.errorMessage &&
                    <Segment color='red'> Esse email já existe</Segment>
                }
                {
                    !this.props.auth.saved  &&

                    <Form>
                        <Form.Field>
                            <label>Nome</label>
                            <input type="text" value={this.state.name} onChange={this.handleChange('name')} />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input type="email" value={this.state.email} onChange={this.handleChange('email')} />
                        </Form.Field>
                        <Form.Field>
                            <label>Escolha o tipo:</label>
                            <select value={this.state.unit} onChange={this.handleChange('unit')}>
                                <option value="metric"> Metrico (km)</option>
                                <option value="imperial"> Imperial (mi)</option>
                            </select>
                        </Form.Field>
    
                        <Form.Field>
                            <label>Escolha a zona:</label>
                            <select value={this.state.timezone} onChange={this.handleChange('timezone')}>
                                {Object.keys(timezones.zones).map(tz => <option key={tz} value={tz}>{tz}</option>)}
                            </select>
                        </Form.Field>
                        <Form.Field>
                            <label>Senha </label>
                            <input type="password" value={this.state.passwd} onChange={this.handleChange('passwd')} />
                        </Form.Field>
                        <Form.Field>
                            <label>Confirmação Senha:</label>
                            <input type="password" value={this.state.passwd2} onChange={this.handleChange('passwd2')} />
                        </Form.Field>
    
                        <Button type="button" onClick={() => this.handleCreateAccount()}> Criar Conta</Button>
                    </Form>
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log("state", state)
    return {
        auth: state.auth
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        createProfile: (user) => dispatch(ActionCreators.createProfileRequest(user)),
        reset: () => dispatch(ActionCreators.createProfileReset())
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(CreateAccount)