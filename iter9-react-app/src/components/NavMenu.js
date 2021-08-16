import React from "react";
import {NavLink} from "react-router-dom";
import Redirect from "react-router-dom";
import '../styles/NavMenu.css';
import ReactTooltip from "react-tooltip";

// sdsad
function ToolTip() {
        return (<ReactTooltip effect='solid' id="toolTip1"/>);
}

export default function NavMenu() {
    let tooltipsParams = {
        'data-background-color': "#5A5A5A",
        'data-text-color': "#fff",
        'data-for': 'toolTip1'
    };

    return (
        <header>
            <nav>
                <ToolTip />
                <ul className='nav-menu'>

                    <li>
                        <NavLink activeClassName="selected" to='/Home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to='/iteration_4'>Iteration 4</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to='/iteration_5'>Iteration 5</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to='/iteration_6'>Iteration 6</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to='/iteration_7'>Iteration 7</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to='/clock-app'>Clock App</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to='/mouse-tracker'>Render Prop</NavLink>
                    </li>
                    <li className="login-btn">
                        <NavLink activeClassName="selected" exact to='/'>
                            <img
                                {...tooltipsParams}
                                data-tip='login'
                                src="/images/user.png" alt=""/>
                        </NavLink>
                    </li>
                </ul>
                <hr/>
            </nav>
        </header>
    );
}

