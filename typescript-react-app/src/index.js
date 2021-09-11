import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import Apps from "./App";
import ReduxToDoApp from "./ReduxApps/ToDoApp/ToDoApp";
import {Provider} from "react-redux";
import store from "./ReduxApps/ToDoApp/store";

ReactDOM.render(
    <React.StrictMode>
        {/*<Apps />*/}
        <Provider store={store}>
            <ReduxToDoApp />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
