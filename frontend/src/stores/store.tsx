import React from 'react'
import {TypeStore} from '../components/App'
const StoreContext = React.createContext({} as TypeStore);
interface PropsStoreProvider {
  store: TypeStore 
}
export const StoreProvider:React.FC<PropsStoreProvider> = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useStore = () => React.useContext(StoreContext);
