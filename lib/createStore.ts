import { createStoreContext } from "./createStoreContext";
import { createStoreProvider } from "./createStoreProvider";
import { createUseStore } from "./createUseStore";
import { StoreProviderProps } from "./types/context";

export function createStore<T = unknown>(store: T) {
  const StoreContext = createStoreContext<T>(); 
  
  const useStore = () => createUseStore<T>(StoreContext);

  const StoreProvider = ({ children }: StoreProviderProps<T>) => createStoreProvider(StoreContext, store, { children });
  
  const innerStore = store

  return {
    StoreContext,
    StoreProvider,
    useStore,
    innerStore
  };
}
