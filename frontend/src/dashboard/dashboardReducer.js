import { GET_SUMMARY } from '../main/actionTypes'


const INITIAL_STATE = {summary: {credit: 0, debt: 0}}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_SUMMARY:
            return { ...state, summary: action.payload }

        default:
            return { state }
    }
}