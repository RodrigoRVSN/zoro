import { useCallback, useRef, Context, ReactNode } from "react";
import { IListener, StoreContextType} from './types/context'

export function createStoreProvider<T>(Context: Context<StoreContextType<T>>, initialData: T, { children }: {children: ReactNode}) {
  const listeners = useRef({}) as unknown as IListener
  const store = useRef(initialData)

  const getStore = useCallback(() => {
    return store.current
  }, [])

  const setStore = (newData: T) => {
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
    <Context.Provider value={{ store, getStore, setStore, registerListener, unregisterListener }}>
      {children}
    </Context.Provider>
  )
}