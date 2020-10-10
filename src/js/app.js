import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store/redux'

import Main from './pages/main.jsx'

const rootElement = document.getElementById('app')
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    rootElement
)