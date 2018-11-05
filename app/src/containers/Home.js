import React, { Component } from 'react'
import Panel from './../components/Panel'



import './Home.scss'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
               <Panel /> 
            </div>
        )
    }
}

export default Home