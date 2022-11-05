import { createContext, useCallback, useContext, useRef } from "react";
import { IListener, StoreContext, StoreProviderProps} from './types/context'

const Store = createContext({} as StoreContext)

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const listeners = useRef({}) as unknown as IListener

  const store = useRef({
    counter: 0,
    user: null,
  })

  const getStore = useCallback(() => {
    return store.current
  }, [])

  const setStore = (newData: Object | Function) => {
    const data = typeof newData === 'function' ? newData(store.current) : newData

    store.current = {
      ...store.current, ...data
    }

    Object.values(listeners.current).forEach(listener => {
      listener(store.current)
    })
  }

  const registerListener = useCallback((listenerId: number, fn: Function) => {
    listeners.current[listenerId] = fn
  }, [])

  const unregisterListener = useCallback((listenerId: number) => {
    delete listeners.current[listenerId]
  }, [])

  return (
    <Store.Provider value={{ store, getStore, setStore, registerListener, unregisterListener }}>
      {children}
    </Store.Provider>
  )
}

export const useStore = () => {
  return useContext(Store)
}