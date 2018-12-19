import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button } from 'semantic-ui-react'
import ActionCretors from '../../redux/actionCreators'

class ChangePassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            passwd: '',
            passwd2: ''
        }
    }

    handleChange = fieldname => event => {
        this.setState({
            [fieldname]: event.target.value
        })
    }

    handleUpdate = () => {
        
        this.props.update({
            passwd: this.state.passwd,
            id: this.props.auth.user.id
        })
    }

    render() {
        return (
            <div>
                <h1>Alterar Senha</h1>
                <input type="password" value={this.state.passwd} onChange={this.handleChange('passwd')} />
                <input type="password" value={this.state.passwd2} onChange={this.handleChange('passwd2')} />
                <br />
                <br />
                <Button type="button" onClick={() => this.handleUpdate()}> Alterar Senha</Button>
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
        update: (user) => dispatch(ActionCretors.updateProfileRequest(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)