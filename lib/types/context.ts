import { MutableRefObject, ReactNode } from "react"

export interface StoreContext {
  store: unknown,
  getStore(): void
  setStore(newData: Object | Function): void
  registerListener(listenerId: number, fn: Function): void
  unregisterListener(listenerId: number): void
}

export interface StoreProviderProps {
  children: ReactNode
}

export type IListener = MutableRefObject<{[id: number]: Function}>
