import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import Converter from "./Converter";
import Calculator from "./Calculator";

ReactDOM.render(
    <React.StrictMode>
        <Calculator/>
        <Converter/>
    </React.StrictMode>,
    document.getElementById('root')
);


