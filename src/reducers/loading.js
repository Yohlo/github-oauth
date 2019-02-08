// This reducer can be used for a loading widget whenever making API calls
const loading = (state = false, action) => {

    switch (action.type) {
        case 'GET_USER':
            return true
        case 'GET_USER_RECEIVED':
            return false
        case 'GET_USER_ERROR':
            return false
        default:
            return state
    }
}

export default loading