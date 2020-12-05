import { api } from '../../API'
import { makeAutoObservable } from 'mobx'

export class UserStore {
    constructor() {
        makeAutoObservable(this)
    }

    login = async (data: { username: string; password: string }, callBack: () => void) => {
        try {
            const response = await api.post('api/token/', data)
            localStorage.setItem('Token', response.data.access)
            callBack()
            return response
        } catch (error) {}
    }

    logout = () => {
        localStorage.clear()
        window.location.href = '/login'
    }
}
