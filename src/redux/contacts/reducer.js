import type from './type'

const initialState = {
    userArr:'',
    placeArr:'',
    educationArr:''
}
const getNewState = (state, action) => {
    switch(action.type) {
        case type.loadContactsUsers:
            return {
                userArr:action.data
            }
        case type.loadContactsPlace:
            return {
                placeArr:action.data
            }
        case type.loadContactsEducation:
            return {
                educationArr:action.data
            }
        default:
            return null
    }
}
export default {
    initialState,
    getNewState
}