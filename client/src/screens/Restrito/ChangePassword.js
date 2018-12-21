import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Segment, Form } from 'semantic-ui-react'
import ActionCretors from '../../redux/actionCreators'

class ChangePassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            passwd: '',
            passwd2: '',
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

    handleUpdate = () => {
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
            this.props.update({
                passwd: this.state.passwd,
                id: this.props.auth.user.id
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Alterar Senha</h1>
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
                    <Segment color='green'> Senha alterada com sucesso</Segment>
                }
                {
                    !this.props.auth.saved &&
                    <Form>
                        <Form.Field>
                            <label>Nova Senha:</label>
                            <input type="password" value={this.state.passwd} onChange={this.handleChange('passwd')} />
                        </Form.Field>
                        <Form.Field>
                            <label>Confirmação Senha:</label>
                            <input type="password" value={this.state.passwd2} onChange={this.handleChange('passwd2')} />
                        </Form.Field>
                        <br />
                        <br />
                        <Button type="button" onClick={() => this.handleUpdate()}> Alterar Senha</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)