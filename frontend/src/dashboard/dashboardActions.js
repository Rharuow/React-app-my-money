import axios from 'axios'

import { GET_SUMMARY } from '../main/actionTypes'

const BASE_URL = "http://localhost:3003/api"

export const getSummary = () => {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    console.log(GET_SUMMARY)

    return (dispatch => {
        dispatch({
            type: GET_SUMMARY,
            payload: request.data
        })
    })
}