import React, { Component } from 'react'

import ActionCretors from '../../redux/actionCreators'

import { connect } from 'react-redux'

import { Table, Button } from 'semantic-ui-react'

import Distance from './../elements/Distance'

import Duration from './../elements/Duration'

import DateSrt from './../elements/DateSrt'

class Runs extends Component {

    componentDidMount() {
        console.log(this.props.load())
    }

    render() {
        const run = {
            friendly_name: 'run de test',
            duration: 100,
            distance: 100,
            created: '2018-01-01 00:00:00'
        }
        return (
            <div>
                <h1>Corridas</h1>
                <Button type="button" onClick={() => this.props.create(run)}>Criar Corrida</Button>

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
        load: () => dispatch(ActionCretors.getRunsRequest()),
        create: (run) => dispatch(ActionCretors.createRunsRequest(run))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs) 