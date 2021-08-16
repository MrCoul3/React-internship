import React from "react";
import '../styles/Home.css';

const e = React.createElement;
export default class Home extends React.Component {
    render() {
        return e('Home', null,
            <section className='page home'>
                <h1>This is Home page of my first React-app made with  class components...</h1>
            </section>
            );
    }
}