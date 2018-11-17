import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Redirect, Link, Route } from 'react-router-dom'


import Home from './Home';
import Runs from './Runs';
import Header from './elements/Header';

class Restrito extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.auth.isAuth) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <Header/>
                <div>
                    <Route exact path={`${this.props.match.path}/`} component={Home} />
                    <Route  path={`${this.props.match.path}/runs`} component={Runs} />
                    
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