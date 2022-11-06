import { Context, useContext } from "react";
import { StoreContextType } from "./types/context";

export function createUseStore<T>(StoreContextType: Context<StoreContextType<T>>) {
  return useContext(StoreContextType)
}