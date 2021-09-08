import {connect, Provider} from "react-redux";
import {createStore} from "redux";

const countReducer = function (state = 0, action) {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}
const toDoStore = createStore(countReducer);
const Header = () => (<header><h1>ToDo</h1></header>);
const Container = connect()(Header);
export default function ReduxToDo() {
    return (
        <Provider store={toDoStore}>
            <Container/>
        </Provider>
    );
}