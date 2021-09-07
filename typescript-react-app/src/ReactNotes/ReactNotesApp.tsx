import {BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";
import NotesMain from "./NotesMain";

export default function ReactNotesApp() {
    return (
        <section id='my-notes-app'>
            <header>
                <div className="header-bg">
                    <h1 className='title main-title h2'><span className='text-warning'>R</span>eact Notes</h1>
                </div>
            </header>
            <Router>
                <Route path='/react-notes' component={NotesMain}/>
            </Router>
        </section>
    );
}