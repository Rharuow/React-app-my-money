import { BILLING_SUMMARY_FETCHED, VERSION_APP } from '../main/actionTypes'


const INITIAL_STATE = {
    version: 1,
    summary: {credit: 0, debt: 0}
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case BILLING_SUMMARY_FETCHED:
            return { ...state, summary: action.payload.data }
        case VERSION_APP:
            return { ...state, version: action.payload}
        default:
            return state
    }
}