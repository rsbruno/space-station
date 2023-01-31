import axios from 'axios'

export const instanceAxios = axios.create({
    baseURL: 'https://graphql.datocms.com/',
    timeout: 1000,
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer 1433cb398fcf0cd62c458c447b450f`
    }
});