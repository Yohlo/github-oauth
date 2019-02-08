// OAuth
export const storeAccessToken = (access_token) => ({
    type: 'STORE_ACCESS_TOKEN',
    access_token
});

export const getUser = () => ({
    type: 'GET_USER'
})