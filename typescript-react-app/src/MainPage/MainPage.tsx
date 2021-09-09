import React from "react";
import {Route, Switch, NavLink} from "react-router-dom";
import './MainPage.scss';
import ReactTooltip from "react-tooltip";
import ReactNotesApp from "../ReactNotes/ReactNotesApp";
import ReactCalculatorApp from "../ReactSimpleCalculator/ReactCalculatorApp";
import Converter from "../ReactConverter/Converter";
import ApiTestTS from "../TSApiTest/ApiTest";
import Footer from "../Footer/Footer";

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

                    <header>
                        <div className='header-bg--gradient'>
                            <h2 className='header-title'>Portfolio</h2>
                            <div id="start-ring"></div>
                        </div>

                    </header>

                    <main>
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
                    </main>
                    <Footer />
                </section>}/>

            <Switch>
                <Route exact path='/react-notes' component={ReactNotesApp}/>
                <Route exact path='/converter' component={Converter}/>
                <Route exact path='/calculator' component={ReactCalculatorApp}/>
                <Route exact path='/api-test' component={ApiTestTS}/>
            </Switch>

        </>
    )
}

