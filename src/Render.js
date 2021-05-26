import React, { Component } from 'react'
import Login from './Login'
import Singup from './Singup'

export default class Render extends Component {
    render() {
        return (
            <div>
                <Login />
                <Singup />
            </div>
        )
    }
}
