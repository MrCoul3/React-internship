import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Home from "./Home";
import Iter4 from "./Iter4";
import Iter5 from "./Iter5";
import Iter6 from "./Iter6";
import Iter7 from "./Iter7";
import Clock from "./Clock";
import MouseTracker from "./MouseTracker";
import Login from "./Login";

export default class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/'>
                        {window.localStorage.getItem('login') === 'success' ?
                            <Redirect  to="/Home" /> : <Login />
                        }
                    </Route>
                    <Route  path='/Home'>
                        <Home/>
                    </Route>
                    <Route path='/iteration_4'>
                        <Iter4/>
                    </Route>
                    <Route path='/iteration_5'>
                        <Iter5/>
                    </Route>
                    <Route path='/iteration_6'>
                        <Iter6/>
                    </Route>
                    <Route path='/iteration_7'>
                        <Iter7/>
                    </Route>
                    <Route path='/clock-app'>
                        <Clock/>
                    </Route>
                    <Route path='/mouse-tracker'>
                        <MouseTracker/>,
                    </Route>
                </Switch>
            </main>
        )
    }
}

