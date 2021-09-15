import MainPage from "./MainPage/MainPage";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function Apps() {
    return (
        <section className='Apps'>
            <Router>
                <Route path='/' component={MainPage}/>
            </Router>
        </section>
    );
}