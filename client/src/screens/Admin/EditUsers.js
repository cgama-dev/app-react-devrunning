import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Button, Segment, Form } from 'semantic-ui-react'

import ActionsCreators from './../../redux/actionCreators'

import { Redirect } from 'react-router-dom'

    class EditUsers extends Component {

        constructor(props) {
            super(props)

            this.state = {
                name: '',
                email: '',
                role: '',
                error: ''
            }
        }

        componentDidMount() {
            this.props.load(this.props.match.params.id)
        }

        // static getDerivedStateFromProps(nextProps, prevState) {

        //     //     // if (nextProps.user && nextProps.user.name) {
        //     //     //     return {
        //     //     //         name: nextProps.user.name
        //     //     //     }
        //     //     // }

        //     if (nextProps.user && (prevState.name === undefined || prevState.name === "")) {
        //         const user = {}
        //         const u = nextProps.user
        //         if (u.name !== prevState.name) {
        //             user.name = u.name
        //         }
        //         if (u.email !== prevState.email) {
        //             user.email = u.email
        //         }
        //         return user
        //     }
        //     return null
        // }

        // componentDidUpdate(){

        // }

        componentDidUpdate(prevProps, prevState) {
            if (this.props.user !== prevProps.user) {
                let { name, email, role } = this.props.user
                this.setState({ name, email, role })
            }
        }


        handleChange = fieldname => event => {
            this.setState({
                [fieldname]: event.target.value
            })
        }

        handleSaveUser = () => {
            this.props.update({
                id: this.props.match.params.id,
                name: this.state.name,
                email: this.state.email,
                role: this.state.role
            })
        }

        render() {
            if (this.props.saved) {
                return <Redirect to='/admin/users' />
            }
            return (
                <div>
                    <h1>Editar Usuário</h1>
                    {
                        this.props.saved &&
                        <Segment color='green'> Usuário atualizado com sucesso</Segment>
                    }
                    {
                        !this.props.saved &&
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
                                <label>Tipo usuário</label>
                                <select value={this.state.role} onChange={this.handleChange('role')}>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </Form.Field>
                            <Button type="button" onClick={() => this.handleSaveUser()}> Salvar Usuário </Button>
                        </Form>
                    }
                </div>
            )
        }
    }

const mapStateToProps = (state) => {
    return {
        user: state.users.user,
        saved: state.users.saved
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        load: (id) => dispatch(ActionsCreators.getUserByIdRequest(id)),
        update: (user) => dispatch(ActionsCreators.updateUserRequest(user)),
        reset: () => dispatch(ActionsCreators.updateUserReset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUsers) 