import React, { Component } from 'react'

import { connect } from 'react-redux'

import {Redirect} from 'react-router-dom'

class Restrito extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        if(!this.props.auth.isAuth){
            return <Redirect to='/login' />
        }   
        return (
            <div>
                {JSON.stringify(this.props)}
                <div> Compoennt Restrito</div>
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