import React from "react";
import {Route, Switch, NavLink} from "react-router-dom";
import './MainPage.scss';
import ReactTooltip from "react-tooltip";
import ReactNotesApp from "../ReactNotes/ReactNotesApp";
import Calculator from "../ReactSimpleCalculator/Calculator";
import Converter from "../ReactConverter/Converter";
import ApiTestTS from "../TSApiTest/ApiTest";

const tooltipsParams = {
    'data-background-color': "#5A5A5A",
    'data-text-color': "#fff",
    'data-for': 'toolTip1'
};

function BackToHomeBtn() {
    return (
        <>
            <ReactTooltip effect='solid' id="toolTip1"/>
            <div {...tooltipsParams} data-tip='back to home page' className='BackToHomeBtn'>
                <NavLink to='/'>
                    <img className='img-fluid' src='../images/back.svg' alt="back to main"/>
                </NavLink>
            </div>
        </>
    )
}

export default function MainPage() {
    return (
        <>
            <Route exact path='/:react' render={() =>
                <BackToHomeBtn />
            }/>
            <Route exact path='/' render={() =>
                <section id='Main-page'>
                    <div className="components-menu">
                        <NavLink to='/react-notes'>
                            <img className='component-icon' src="./images/component-icons/note-app-icon.png" alt=""/>
                        </NavLink>
                        <NavLink to='/converter'>
                            <img className='component-icon' src="./images/component-icons/converter-app-icon.png" alt=""/>
                        </NavLink>
                        <NavLink to='/calculator'>
                            <img className='component-icon' src="./images/component-icons/calculator-app-icon.png" alt=""/>
                        </NavLink>
                        <NavLink to='/api-test'>
                            <img className='component-icon' src="./images/component-icons/apitest-app-icon.png" alt=""/>
                        </NavLink>
                    </div>
                </section>}/>

            <Switch>
                <Route exact path='/react-notes' component={ReactNotesApp}/>
                <Route exact path='/converter' component={Converter}/>
                <Route exact path='/calculator' component={Calculator}/>
                <Route exact path='/api-test' component={ApiTestTS}/>
            </Switch>

        </>
    )
}

