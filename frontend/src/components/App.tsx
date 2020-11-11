import React, { Component } from 'react';
import { Router } from '../Router';
import { UserStore } from './Auth/UserStore';

import { StoreProvider } from '../stores/store';

const stores = {
  userStore: new UserStore(),
};
export type TypeStore = typeof stores
function App() {
  return (
    <StoreProvider store={stores}>
      <Router />
    </StoreProvider>
  );
}

export default App;
