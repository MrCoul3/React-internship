import React from "react";
import '../styles/MouseTracker.css';

 class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.mouseMove = this.mouseMove.bind(this);
        this.state = { x: 0, y: 0 };

    }
    mouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
    render() {
        return (
            <div className={'tracker-frame'} onMouseMove={this.mouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

class Cat extends React.Component {
    render() {
        const state = this.props.m;
        return (
            <img src="../images/Fashion-Cat.webp" style={{ position: 'absolute', left: state.x, top: state.y, width: '100px'}} />
        );
    }
}

export default class MouseTracker extends React.Component {
    render() {
        return (
            <section className={'page render-prop mouse-tracker'}>
                <Mouse render={state =><Cat m={state}/>}/>
            </section>
        );
    }
}