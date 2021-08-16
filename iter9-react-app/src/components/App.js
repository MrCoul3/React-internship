import React from "react";
import {
    BrowserRouter as Router,
    HashRouter
} from "react-router-dom";
import NavMenu from "./NavMenu";
import Main from './Main';
import '../styles/App.css';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <NavMenu />
                <Main />
            </Router>
        );
    }
}