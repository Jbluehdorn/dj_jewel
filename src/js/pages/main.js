import React from 'react'

import { run } from '../scripts/bot'

export default class Main extends React.Component {
    componentDidMount() {
        console.log('things')
        run()
    }

    render() {
        return(
            <h1>Hello from React!</h1>
        )
    }
}