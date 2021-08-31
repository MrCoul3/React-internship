import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyNoteApp from './MyNoteApp';
import Interfaces from "./Interfaces";


ReactDOM.render(
  <React.StrictMode>
    <MyNoteApp />
    <Interfaces />
  </React.StrictMode>,
  document.getElementById('root')
);


