import type from './type'
import axios from 'axios'
export default {
    loadContactsUsers: () => dispatch => {
        return axios('/users')
        .then(res => {
            dispatch({
                type:type.loadContactsUsers,
                data:res
            })
        })
    },
    loadContactsPlace: () => dispatch => {
        axios('/place')
        .then(res => {
            dispatch({
                type:type.loadContactsPlace,
                data:res
            })
        })
    },
    loadContactsEducation: () => dispatch => {
        axios('/education')
        .then(res => {
            dispatch({
                type:type.loadContactsEducation,
                data:res
            })
        })
    }
}