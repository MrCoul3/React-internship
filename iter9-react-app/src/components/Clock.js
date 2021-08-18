import React from 'react';

function Clock2(props) {
    return (<p>{props.date.toLocaleTimeString()}</p>);
}

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            count: 0
        };
    }

    componentDidMount() { // запускается после того, как компонент отрендерился
        this.timerID = setInterval(()=> {
            this.tick();
            this.changeCounter();
        }, 1000);

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    changeCounter(){
        this.setState(state => ({
            count: (state.count+1)
        }));
    }
    render() {
        return (
            <section className={'page clock-app'}>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
                <p>Counter: {this.state.count}</p>
                <Clock2 date={this.state.date}/>
            </section>
        );
    }
}
