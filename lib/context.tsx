import { createContext, ReactNode, useContext, useState } from "react";

interface StoreContext {
  store: unknown,
  updateStore: (newData: Object) => void
}

const Store = createContext({} as StoreContext)

interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [store, setStore] = useState({
    counter: 0,
    user: null,
  })

  const updateStore = (newData: Object) => {
    setStore(prevState => ({ ...prevState, ...newData }))
  }

  return (
    <Store.Provider value={{ store, updateStore }}>
      {children}
    </Store.Provider>
  )
}

export const useStore = () => {
  return useContext(Store)
}