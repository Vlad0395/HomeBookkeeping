import { api } from '../../API';
import { makeAutoObservable } from "mobx"

export class UserStore {
   
    constructor() {
        makeAutoObservable(this)
    }

  login = async(data: { username: string; password: string }) => {
   const response = await api.post('api/token/', data);
   console.log('response', response)
  };
}
