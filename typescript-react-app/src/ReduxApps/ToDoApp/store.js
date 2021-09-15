import {applyMiddleware, createStore} from "redux";
import noteReducer from "./reducer";

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}


const store = createStore(
    noteReducer,
    applyMiddleware(logger)
);

export default store;