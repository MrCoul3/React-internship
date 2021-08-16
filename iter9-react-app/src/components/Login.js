import React from 'react';
import '../styles/Login.scss';


export let loginStatus = '';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
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
                 login: 'login'
             })
            loginStatus = this.state.login;
        }
    }


    render() {
        return (
            <section id='login' className={'page login-page'}>
                <div className='form'>
                    <input onChange={this.onChange.bind(this)}   name='login' className='form-element form-element--field' type="text" placeholder='Login'/>
                    <label htmlFor='login' >example: Nik</label>
                    <button onClick={this.onClick.bind(this)} className='form-element form-element--send-btn'>send</button>
                </div>
            </section>
        );
    }
}

