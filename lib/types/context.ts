import { MutableRefObject, ReactNode } from "react"

export interface StoreContextType<T> {
  store: MutableRefObject<T>,
  getStore(): T
  setStore(newData: Partial<T> | ((a: T) => void)): void
  registerListener(listenerId: number, fn: Function): void
  unregisterListener(listenerId: number): void
}

export interface StoreProviderProps<T> {
  children: ReactNode
  initialData: T
}

export type IListener = MutableRefObject<{[id: number]: Function}>
