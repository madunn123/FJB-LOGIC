import { createContext } from 'react';

const StoreContext = createContext();

export const StoreProvider = StoreContext.Provider;
export const StoreConsumer = StoreContext.Consumer;

export default StoreContext;
