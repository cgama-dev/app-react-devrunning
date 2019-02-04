import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom'

import Home from './Home'

import Users from './Users'

import Runs from './Runs'

import Header from './elements/Header';
import EditUsers from './EditUsers';

class Admin extends Component {

    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        // const { user } = this.props.auth

        if (!this.props.auth.isAuth) {
            return <Redirect to='/login' />
        }

        if (this.props.auth.user.role !== 'admin') {
            return <Redirect to='/restrito' />
        }
        return (
            <div>
                <Header />
                <div>
                    <Route exact path={`${this.props.match.path}/`} component={Home} />
                    <Route exact path={`${this.props.match.path}/users`} component={Users} />
                    <Route path={`${this.props.match.path}/users/:id/edit`} component={EditUsers} />
                    <Route path={`${this.props.match.path}/runs`} component={Runs} />
                    <Route />
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

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)