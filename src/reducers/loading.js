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