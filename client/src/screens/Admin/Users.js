import React, { Component } from 'react'

import ActionCretors from '../../redux/actionCreators'

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { Table, Button, Segment, Label } from 'semantic-ui-react'

// import Distance from './../elements/Distance'

// import Duration from './../elements/Duration'

// import DateSrt from './../elements/DateSrt'

class Users extends Component {

    componentDidMount() {
        this.props.load()
    }

    handleRedirectCreateRun() {
        this.setState({
            createrun: true
        })
    }

    render() {

        return (
            <div>
                <h1>Corridas</h1>
                <Button as={Link} to={'/admin/create-user'} type="button">Criar Usuário</Button>

                <h1> Lista de Usuários</h1>
                {
                    !this.props.users.isLoading && this.props.users.data.length === 0 &&
                    <Segment color='blue'> Nenhum usuaŕio cadastrado.</Segment>
                }
                {!this.props.users.isLoading && this.props.users.data.length > 0 &&
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Nome</Table.HeaderCell>
                                <Table.HeaderCell>Email</Table.HeaderCell>
                                <Table.HeaderCell>Ação</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {
                                this.props.users.data.map((user) => (
                                    <Table.Row key={user.id}>
                                        <Table.Cell>
                                            {user.name}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {user.email}
                                        </Table.Cell>
                                        <Table.Cell> <Button basic color='red' onClick={() => this.props.delete(user.id)}> Exluir usuário </Button> </Table.Cell>
                                    </Table.Row>
                                ))
                            }
                        </Table.Body>
                    </Table>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => dispatch(ActionCretors.getUsersRequest()),
        delete: (id) => dispatch(ActionCretors.deleteUsersRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users) 