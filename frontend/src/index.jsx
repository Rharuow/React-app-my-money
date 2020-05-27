import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise'
import multiMiddleware from 'redux-multi'
import thunkMiddleware from 'redux-thunk'

import reducers from './main/reducers'
import App from './main/app'

const store = applyMiddleware(promiseMiddleware, multiMiddleware, thunkMiddleware)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app')
)