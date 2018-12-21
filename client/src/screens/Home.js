import React, { Component } from 'react'
import Header from './../Header'
import { Container, Image } from 'semantic-ui-react'
class Home extends Component {
    render() {
        return (
            <Container>
                <Header></Header>
                <h1>Seja bem vindo</h1>
                <Image src={'/logo-home.png'} size='medium' spaced={true} centered={true} />
            </Container>
        )
    }
}

export default Home