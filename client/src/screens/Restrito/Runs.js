import React, { Component } from 'react'

import ActionCretors from '../../redux/actionCreators'

import { connect } from 'react-redux'

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
                <button type="button" onClick={() => this.props.create(run)}>Criar Corrida</button>

                <h1> Lista de Corridas</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Duração</th>
                            <th>Distance</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.runs.data.map((run) => (
                                <tr key={run.id}>
                                    <td>{run.friendly_name}</td>
                                    <td>{run.duration}</td>
                                    <td>{run.distance}</td>
                                    <td>{run.created}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
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