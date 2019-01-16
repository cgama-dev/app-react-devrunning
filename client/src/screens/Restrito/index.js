import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Redirect, Route } from 'react-router-dom'

import Home from './Home';
import Runs from './Runs';
import MyAccount from './MyAccount';
import ChangePassword from './ChangePassword';
import Header from './elements/Header';
import CreateRun from './CreateRun';

class Restrito extends Component {

    render() {
        if (this.props.auth.isSigningin) {
            return <p>Loading ...</p>
        }
        if (!this.props.auth.isAuth) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <Header/>
                <div>
                    <Route exact path={`${this.props.match.path}/`} component={Home} />
                    <Route  path={`${this.props.match.path}/runs`} component={Runs} />
                    <Route  path={`${this.props.match.path}/my-account`} component={MyAccount} />
                    <Route  path={`${this.props.match.path}/change-password`} component={ChangePassword} />
                    <Route  path={`${this.props.match.path}/create-run`} component={CreateRun} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Restrito) 