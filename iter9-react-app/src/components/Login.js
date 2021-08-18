import React from 'react';
import '../styles/Login.scss';
import {Redirect} from "react-router";
import ReactTooltip from 'react-tooltip';
// import {tooltipsParams} from './App';
function ToolTip() {
    return (<ReactTooltip effect='solid' id="toolTip1"/>);
}

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: 'Nik',
            redirect: '',
            wrong: null
        }
    }
    onChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    onClick() {
        if (this.state.login === 'Nik') {
             this.setState({
                 redirect: <Redirect to='/Home' />
             })
        }
    }

    render() {
        let tooltipsParams = {
            'data-background-color': "#5A5A5A",
            'data-text-color': "#fff",
            'data-for': 'toolTip1'
        };
        return (
            <section id='login' className={'page login-page'}>
                <div className='form'>
                    <ToolTip />
                    <input value='Nik' onChange={this.onChange.bind(this)}   name='login' className='form-element form-element--field' type="text" placeholder='Login'/>
                    <label  htmlFor='login' >example: Nik</label>
                    <button {...tooltipsParams} data-tip='click Send for Redirect to Home page ' onClick={this.onClick.bind(this)} className='form-element form-element--send-btn'>send</button>
                </div>
                {this.state.redirect}
            </section>
        );
    }
}

