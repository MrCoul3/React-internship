import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MyNotesApp from './MyNotesApp';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Converter from "./Converter";

const root = document.getElementById('root');

ReactDOM.render((
    <section id='my-notes-app'>
        <header>
            <Converter/>
            <div className="header-bg">
                <h1 className='title main-title h2'><span className='text-warning'>R</span>eact Notes</h1>
            </div>
        </header>
        <Router>
            <Route path='/' component={MyNotesApp}/>
        </Router>
    </section>),
    root
);
