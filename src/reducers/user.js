
export default function USER_REDUCER (state = {}, action) {
    switch(action.type) {
        case 'GET_USER_DATA' :
            return {
                ...state,
                user_data:action.payload,
            }
        default:
            return state
    }
}