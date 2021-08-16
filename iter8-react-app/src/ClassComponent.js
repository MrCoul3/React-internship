import React from "react";


export default class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 1,
            counter: props.startVal
        };
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage() {
        this.setState({
            message: this.state.message + 1,
        });
    }



    render() {
        const handlerClick = () => {
            this.setState({
                counter: this.state.counter - this.state.message
            });
        };
        return (
            <div>
                <p>Hello {this.state.message}!</p>
                <button onClick={handlerClick}>{this.state.counter}</button>
                <button onClick={this.updateMessage}>Click me</button>
            </div>
        )
    }
}
