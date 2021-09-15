import {createStore} from "redux";
import noteReducer from "./reducer";

const store = createStore(noteReducer);

export default store;