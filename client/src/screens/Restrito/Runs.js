import React, { Component } from 'react'

import ActionCretors from '../../redux/actionCreators'

import { connect } from 'react-redux'

import { Table, Button } from 'semantic-ui-react'

class Runs extends Component {

    constructor(props) {
        super(props)
    }

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
                                    <Table.Cell>{run.duration}</Table.Cell>
                                    <Table.Cell>{run.distance}</Table.Cell>
                                    <Table.Cell>{run.created}</Table.Cell>
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
        runs: state.runs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => dispatch(ActionCretors.getRunsRequest()),
        create: (run) => dispatch(ActionCretors.createRunsRequest(run))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs) 