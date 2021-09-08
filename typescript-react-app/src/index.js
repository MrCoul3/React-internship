import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import Apps from "./App";
import ReduxToDo from "./RduxToDo/ReduxToDo";
import ContextToDoApp from "./ContextToDo/ContextToDoApp";


ReactDOM.render(
    <React.StrictMode>
       <Apps />
    </React.StrictMode>,
    document.getElementById('root')
);

