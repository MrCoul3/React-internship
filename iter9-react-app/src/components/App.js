import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import NavMenu from "./NavMenu";
import Main from './Main';
import '../styles/App.css';
import Footer from "./Footer";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <NavMenu />
                <Main />
                <Footer />
            </Router>
        );
    }
}