import React, { Component } from 'react'

import ActionCretors from '../../redux/actionCreators'

import { connect } from 'react-redux'

import { Table, Button } from 'semantic-ui-react'

import timezones from 'moment-timezone/data/meta/latest'

class MyAccount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            unit: '',
            timezone: ''
        }
    }

    componentDidMount() {
        this.setState({
            unit: this.props.auth.unit,
            timezone: this.props.auth.timezone
        })
    }

    handleChange = fieldname => event => {
        this.setState({
            [fieldname]: event.target.value
        })
    }

    handleUpdate = () => {
        this.props.update({
            unit: this.state.unit,
            timezone: this.state.timezone,
            id: this.props.auth.id
        })
    }

    render() {
        return (
            <div>
                <h1>Minha Conta</h1>

                <select value={this.state.unit} onChange={this.handleChange('unit')}>
                    <option value="metric"> Metrico (km)</option>
                    <option value="imperial"> Imperial (mi)</option>
                </select>

                <br />
                <br />
                <select value={this.state.timezone} onChange={this.handleChange('timezone')}>
                    {Object.keys(timezones.zones).map(tz => <option key={tz} value={tz}>{tz}</option>)}
                </select>
                <br />
                <br />

                <Button type="button" onClick={() => this.handleUpdate()}> Salvar</Button>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (user) => dispatch(ActionCretors.updateProfileRequest(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)
