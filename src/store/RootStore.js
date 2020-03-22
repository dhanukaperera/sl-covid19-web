import { createContext, useContext } from "react";
import DataStore from "./DataStore";

class RootStore {
	constructor() {
		this.stores = {
			dataStore: new DataStore()
		};
	}
}

const rootStore = new RootStore();

export const rootStoreContext = createContext(rootStore);
export default rootStore;
export const useStore = () => useContext(rootStoreContext);
