const deployEnv = process.env.REACT_APP_ENV

export const baseURL = 
    deployEnv === "production"
        ? 'https://sauti-marketprice-data.herokuapp.com'
        : 'https://sauti-marketprice-data.herokuapp.com'

export const sautiDevURL = 
    deployEnv === "production"
        ? `${baseURL}/sauti/developer`
        : `${baseURL}/sauti/developer`

export const sautiClientURL = 
    deployEnv === "production"
        ? `${baseURL}/sauti/client`
        : `${baseURL}/sauti/client`

export const apiUserURL =
    deployEnv === "production"
        ? `${baseURL}/api/users`
        : `${baseURL}/api/users` 