import {createStore} from "redux";
import {rootReducer} from "../Redux/rootReducer";
export const store = createStore(rootReducer);
window.store = store;
console.log(store.getState());





