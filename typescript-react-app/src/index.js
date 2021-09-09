import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import Apps from "./App";
import ReduxToDo from "./ReduxApp/ReduxToDo";

ReactDOM.render(
    <React.StrictMode>
        <Apps />
    </React.StrictMode>,
    document.getElementById('root')
);
