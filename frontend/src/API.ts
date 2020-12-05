import axios from 'axios'

export const backURL = 'http://homebookkeeing.loc/'

export const baseURL = `${backURL}`

export const api = axios.create({
    baseURL,
})
