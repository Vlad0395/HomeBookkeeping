import React from 'react'
import { Router } from '../Router'
import { UserStore } from './Auth/UserStore'

import { StoreProvider } from '../stores/store'
import '../assets/scss/theme.scss'
import { HeaderStore } from '../stores/headearStore'
import { LandlordStore } from '../stores/landlordStore'

import './App.scss'

const stores = {
    userStore: new UserStore(),
    headerStore: new HeaderStore(),
    landlordStore: new LandlordStore(),
}
export type TypeStore = typeof stores
function App() {
    return (
        <StoreProvider store={stores}>
            <Router />
        </StoreProvider>
    )
}

export default App
