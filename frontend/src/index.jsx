import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provide } from 'react-redux'

import reducers from './main/reducers'
import App from './main/app'

const store = createStore(reducers)

ReactDOM.render(
    <Provide store={store}>
        <App/>
    </Provide>
    , document.getElementById('app')
)