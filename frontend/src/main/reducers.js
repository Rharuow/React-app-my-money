import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    dashboard: () => ({summary: {credit: 50, debt: 50}})
})

export default rootReducer