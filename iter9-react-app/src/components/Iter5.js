import React from "react";

export default class Iter5 extends React.Component {
    constructor(props) {
        super(props);
        this.ask = this.ask.bind(this);
        this.state = {
            color: ''
        }
    }
    ask() {
        this.setState(state => ({
            color: (state.color === '') ? 'red' : ''
        }))
        window.confirm("Вы согласны?") ? alert("Вы согласились.") : alert("Вы отменили выполнение.")
    }
    render() {
        return (
            <section className='page iter5'>
                <button onClick={this.ask} style={{background: this.state.color}} className="click-for-ask-btn">click for ask</button>
            </section>
        );
    }
}