import React, { Component } from 'react'

import ActionCretors from '../../redux/actionCreators'

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { Table, Button } from 'semantic-ui-react'

import Distance from './../elements/Distance'

import Duration from './../elements/Duration'

import DateSrt from './../elements/DateSrt'

class Runs extends Component {

    componentDidMount() {
        console.log(this.props.load())
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
                <Button as={Link} to={'/restrito/create-run'} type="button">Criar Corrida</Button>

                <h1> Lista de Corridas</h1>
                <Table celled>
                    <Table.Header>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Duração</Table.HeaderCell>
                        <Table.HeaderCell>Distance</Table.HeaderCell>
                        <Table.HeaderCell>Data</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                        {
                            this.props.runs.data.map((run) => (
                                <Table.Row key={run.id}>
                                    <Table.Cell>{run.friendly_name}</Table.Cell>
                                    <Table.Cell> <Duration duration={run.duration} /></Table.Cell>
                                    <Table.Cell> <Distance distance={run.distance} metric={this.props.auth.user.unit} /></Table.Cell>
                                    <Table.Cell> <DateSrt date={run.created} timezone={this.props.auth.user.timezone} /></Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        runs: state.runs,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => dispatch(ActionCretors.getRunsRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs) 