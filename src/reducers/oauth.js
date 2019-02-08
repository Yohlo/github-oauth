const oauth = (state = {}, action) => {

    switch (action.type) {
        case 'STORE_ACCESS_TOKEN':
            return {
                access_token: action.access_token,
                ...state
            }
        case 'GET_USER_RECEIVED':
            // save only the important bits!
            return {
                login: action.data.login,
                avatar_url: action.data.avatar_url,
                name: action.data.name,
                ...state
            }
        default:
            return state;
    }
}
export default oauth;