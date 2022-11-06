import { createContext } from "react";
import { StoreContextType } from "./types/context";

export function createStoreContext<T>() {
  return createContext<StoreContextType<T>>({} as StoreContextType<T>);
}