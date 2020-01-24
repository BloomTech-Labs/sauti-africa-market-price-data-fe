// ! HELPER FUNCTIONALITIES FOR DATA PERTAINING TO USER ROLES

// * PKGS
import axios from 'axios';

// * RETURN THE ROLE OF THE LOGGED IN USER AND SET STATE DATA
export const validateRole = async (data, set) => axios.post(
    'http://localhost:8888/api/users/',
    !!data === true && data
) // ? VALIDATE DATA
    .then(res => {
        const data = { ...res.data.app_metadata }
        return !!data.role === true && data.role
    }) // ? SET STATE DATA
    .then(res => set(res))
    .finally(() => console.log('Completed role validation and return data.'))

// * SET REDIRECT URL FOR REACT LOGIN AUTH0 API. <- MANUAL REDIRECT ASIDE FROM AUTH0
export const setRedirectURL = (status, set) =>
    status === 'freeUser'
        ? set('http://localhost:3000/plan')
        : set('http://localhost:3000/')