import { ReactNode } from "react";

export type GetterParams<T> = (store: T) => ReactNode