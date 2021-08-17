import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import NavMenu from "./NavMenu";
import Main from './Main';
import '../styles/App.css';
import Footer from "./Footer";
// import ReactTooltip from "react-tooltip";

// export function ToolTip() {
//     return (<ReactTooltip effect='solid' id="toolTip1"/>);
// }
// export let tooltipsParams = {
//     'data-background-color': "#5A5A5A",
//     'data-text-color': "#fff",
//     'data-for': 'toolTip1'
// };

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