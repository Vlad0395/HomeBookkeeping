import axios from 'axios'

export const backURL = 'http://homebookkeeing.loc/'

export const baseURL = `${backURL}`

export const api = axios.create({
    baseURL,
})

export const setHeadersBrearer = (brearer: string) => {
    if (brearer !== null) {
        api.defaults.headers.common = {
            Authorization: `Bearer ${brearer}`,
        }
    }
}
