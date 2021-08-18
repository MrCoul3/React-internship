import "../styles/Iter4.css";
import React from "react";

const e = React.createElement;

class Button extends React.Component {
    render() {
        return e('button', {
            onClick: this.props.handleClick,
            className: "btn",
            value: this.props.value1
        }, this.props.inner);
    }
}

class CalculateApp extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.calculator = this.calculator.bind(this);
        this.state = {
            val1: '',
            val2: '',
            result: ''
        }
    }

    onChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    calculator(event) {
        this.setState({
            //eslint-disable-next-line no-eval
            result: eval(`${+this.state.val1}${event.target.value}${+this.state.val2}`)
        })
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <calculate-app>
                <div className="wrapper">
                    <input name='val1' value={this.state.val1} onChange={this.onChange} className='first' type="number"
                           placeholder="enter first number"/>
                    <input name='val2' value={this.state.val2} onChange={this.onChange} className='second' type="number"
                           placeholder="enter first number"/>
                    <div className="result">= {this.state.result}</div>
                </div>
                <div className="grid-wrapper">
                    <button onClick={this.calculator} className="btn" value="+">+</button>
                    <button onClick={this.calculator} className="btn" value="-">-</button>
                    <button onClick={this.calculator} className="btn" value="*">*</button>
                    <button onClick={this.calculator} className="btn" value="/">/</button>
                    <button onClick={this.calculator} className="btn" value="**">**</button>
                    <button onClick={this.calculator} className="btn" value="%">%</button>
                </div>
            </calculate-app>);
    }
}

class PrevDefaultBtn extends React.Component {
    render() {
        return e('a', {
            onClick: this.props.handleClick,
            href: '/',
            className: "prev-def-link",
        }, 'Reload Prevent Default');
    }
}

class Rectangle extends React.Component {
    constructor(props) {
        super(props);
        this.scale = this.scale.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.state = {
            color: '',
            scale: ''
        };
    }

    mouseOver() {
        this.setState({
            color: 'rectangle-color'
        })
    }

    mouseOut() {
        this.setState({
            color: ''
        })
    }

    scale() {
        this.setState({
            scale: (this.state.scale === '') ? 'rectangle-scale' : ''
        })
    }

    render() {
        let {color, scale} = this.state;
        return (
            <div onClick={this.scale} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}
                 className={`rectangle ${color} ${scale}`}>
                Click me
            </div>
        );
    }
}

class ContentChangerApp extends React.Component {
    constructor(props) {
        super(props);
        this.paragraph =
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum enim, fugit nesciunt nihil
                officia quis rerum soluta tempora. Impedit labore perspiciatis qui sequi? Alias maxime porro possimus
                quia ut?</p>;
        this.state = {
            textList: []
        };
    }

    contentAdder() {
        this.setState({
            textList: this.state.textList.concat(this.paragraph)
        })

    }

    contentDeleter() {
        this.setState({
            textList: this.state.textList.filter((_, i, arr) => i < arr.length - 1)
        })
    }
    render() {
        return (
            <content-changer>
                <div className="flex-box">
                    <Button handleClick={() => this.contentAdder()} className='add' inner={'Add Content'}/>
                    <Button handleClick={() => this.contentDeleter()} className='del' inner={'Del Content'}/>
                </div>
                {this.state.textList}
            </content-changer>
        );
    }
}


export default class Iter4 extends React.Component {
    render() {
        return e('section', {className: 'page iter4'},
            e(CalculateApp),
            e(PrevDefaultBtn, {handleClick: e => e.preventDefault()}),
            e(Rectangle),
            e(ContentChangerApp)
        );
    }
}
