import axios from 'axios';

const getApiGenerator = next => (route, name) =>
    axios.get(route, {
        headers: {
            'Content-Type': 'application/json',
          }})
        .then(res => {
            next({
                type: `${name}_RECEIVED`,
                data: res.data
            })
        },
        (err) => {
            console.log(err);
            return next({
                type: `${name}_ERROR`,
                err
            })
        })

const dataService = store => next => action => {
    next(action)
    var url;
    var state = store.getState();
    const getApi = getApiGenerator(next)
    switch (action.type) {
        case 'GET_USER':
            console.log(store)
            url = `https://api.github.com/user?access_token=${state.oauth.access_token}`
            getApi(url, action.type)
            break
        default:
            break
    }
}

export default dataService