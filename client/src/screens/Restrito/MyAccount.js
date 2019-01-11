import React, { Component } from 'react'

import ActionCretors from '../../redux/actionCreators'

import { connect } from 'react-redux'

import { Button, Form, Segment } from 'semantic-ui-react'

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
            unit: this.props.auth.user.unit,
            timezone: this.props.auth.user.timezone
        })
        this.props.reset()
    }

    handleChange = fieldname => event => {
        this.setState({
            [fieldname]: event.target.value
        })
    }

    handleUpdate = () => {
        console.log(this.props.auth)
        this.props.update({
            unit: this.state.unit,
            timezone: this.state.timezone,
            id: this.props.auth.user.id
        })
    }

    render() {
       
        return (
            <div>
            
                <h1>Minha Conta</h1>
                {
                    this.props.auth.saved &&
                    <Segment color='green'> Dados atualizados com sucesso</Segment>
                }
                {
                    !this.props.auth.saved &&
                    <Form>
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
                        <br />
                        <br />

                        <Button type="button" onClick={() => this.handleUpdate()}> Salvar</Button>
                    </Form>
                }

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
        update: (user) => dispatch(ActionCretors.updateProfileRequest(user)),
        reset: () => dispatch(ActionCretors.updateProfileReset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)
