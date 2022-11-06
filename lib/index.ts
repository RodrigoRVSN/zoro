import { store } from "../src/store";
import { createStore } from "./createStore";

const { innerStore, StoreContext, StoreProvider, useStore } = createStore(store)

export { innerStore, StoreContext, StoreProvider, useStore }
