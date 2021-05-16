import { makeAutoObservable } from 'mobx'
import { api } from '../API'
import { CreateLandLord, Landlord } from '../models/landlordModels'
export class LandlordStore {
    constructor() {
        makeAutoObservable(this)
    }

    _landlords: Landlord[] = []

    createLandLord = (data: CreateLandLord, callBack: () => void) => {
        try {
            api.post('api/v1/transactions/create_landlord/', data)
            // callBack()
        } catch (error) {}
    }
    getLandlords = async () => {
        try {
            const response = (await api.get('api/v1/transactions/landlords/')).data
            this._landlords = response
        } catch (error) {}
    }
}
