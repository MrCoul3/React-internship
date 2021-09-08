import {connect, Provider} from "react-redux";
import {createStore} from "redux";
import React from "react";

const countReducer = function (state = 0, action) {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        case 'DEFAULT': return state = 0;
        case 'HUNDRED': return state + 100;
        default: return state;
    }
}
const toDoStore = createStore(countReducer);

const mapDispatchToProps = dispatch => {
    return {
        handleDecrementClick: () => dispatch({type: 'INCREMENT'}),
        handleIncrementClick: () => dispatch({type: 'DECREMENT'}),
        handleDefaultClick: () => dispatch({type: 'DEFAULT'}),
        handle100Click: () => dispatch({type: 'HUNDRED'})
    }
}

const mapStateToProps = state => {
    return {
        count: state
    };
};

const Header = ({count, handleDecrementClick, handleIncrementClick, handleDefaultClick, handle100Click}) => (
    <header>
        <h1>ToDo {count}</h1>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDefaultClick}>to Default</button>
        <button onClick={handle100Click}>+100</button>
    </header>
);

const Container = connect(mapStateToProps, mapDispatchToProps)(Header);

export default function ReduxToDo() {
    return (
        <Provider store={toDoStore}>
            <Container/>
        </Provider>
    );
}