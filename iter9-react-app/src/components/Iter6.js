import '../styles/Iter6.css';
import React from "react";

export let cookieFuncs = {
    setCookie: (name, value, opt = {}) => {
        opt = {
            path: '/',
            ...opt
        };
        let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        for (let optKey in opt) {
            let optVal = opt[optKey];
            cookie += '; ' + optKey;
            cookie += '=' + optVal;
        }
        console.log(cookie)
        document.cookie = cookie;
    },
    getCookie: (name) => {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
}

class History extends React.Component {
    constructor(props) {
        super(props);
        this.showState = this.showState.bind(this);
        this.state = {
            stateValue: '',
            location: null,
        }
    }

    reload() {
        window.location.reload();
    }

    goToOtherSite() {
        window.location = "http://google.com";
    }

    historyBack() {
        window.history.back();
    }

    historyForward() {
        window.history.forward();
    }

    pushState() {
        window.history.pushState('MyHistory', 'new state', "iteration_5");
    }

    replaceState() {
        window.history.replaceState('MyHistory', 'second state', 'iteration_7');
    }

    showState() {
        let historyName = window.history.state;
        this.setState({
            stateValue: historyName
        })
    }

    render() {
        return (
            <fieldset>
                <legend>History</legend>
                <button onClick={this.goToOtherSite} className={"link"}>go to GOOGLE</button>
                <button onClick={this.reload} className={"reload"}>reload page</button>
                <button onClick={this.historyBack} className={"his-back-btn"}>back</button>
                <button onClick={this.historyForward} className={'his-forward-btn'}>forward -></button>
                <button onClick={this.pushState} className={'push-state-btn'}>push new history page</button>
                <button onClick={this.replaceState} className={'replace-state-btn'}>replace history state</button>
                <div>
                    <button onClick={this.showState} className={'show-state-btn'}>show history state</button>
                    <input value={this.state.stateValue} disabled className={"show-state"} type="text"
                           placeholder="result of history state"/>
                </div>
            </fieldset>
        );
    }
}

class Cookies extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeInputs = this.onChangeInputs.bind(this);
        this.setCookie = this.setCookie.bind(this);
        this.getCookies = this.getCookies.bind(this);
        this.state = {
            cookieName: null,
            cookieVal: null
        }
    }

    onChangeInputs(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    setCookie() {
        let options = {
            path: '/',
            domain: 'localhost',
            'max-age': 3600,
            secure: true,
            samesite: 'strict'
        };
        const {cookieName, cookieVal} = this.state;
        cookieFuncs.setCookie(cookieName, cookieVal, options);
        this.setState({
            cookieVal: ''
        })
    }

    getCookies() {
        const {cookieName} = this.state;
        console.log(cookieName)
        this.setState({
            cookieVal: (cookieName !== null) ? cookieFuncs.getCookie(cookieName) : 'введите имя куки'
        })
    }

    render() {
        return (
            <fieldset>
                <legend>Cookies</legend>
                <div>
                    <input name='cookieName' onChange={this.onChangeInputs} className="cookie-input cookie-name"
                           type="text" placeholder="cookie name"/>
                    <input value={this.state.cookieVal} name='cookieVal' onChange={this.onChangeInputs} className="cookie-input cookie-value"
                           type="text" placeholder="cookie value"/>
                    <button onClick={this.setCookie} className="set-cookie">set cookie</button>
                    <button onClick={this.getCookies} className="get-cookie">get cookie</button>
                    <input value={this.state.cookieVal} disabled className="show-cookie" type="text" placeholder="result of getCookie"/>
                </div>
            </fieldset>
        );
    }
}

class LocalStorage extends React.Component {
    constructor(props) {
        super(props);
        this.getLocalData    = this.getLocalData.bind(this);
        this.onChangeInput   = this.onChangeInput.bind(this);
        this.changeLocalData = this.changeLocalData.bind(this);
        this.state = {
            localStorageVal: null,
            inputData: null
        }
    }

    componentDidMount() {
        let options = {
            path: '/',
            domain: 'localhost',
            'max-age': 3600,
            secure: true,
            samesite: 'strict'
        };
        localStorage.setItem('my-options', JSON.stringify(options, null, 2));
    }

    getLocalData() {
        this.setState({
            localStorageVal: window.localStorage.getItem('myOptions')
        })
    }

    changeLocalData() {
        window.localStorage.setItem('myOptions', this.state.inputData);

    }
    onChangeInput(e) {
        this.setState({
            inputData: e.target.value
        })
    }

    render() {
        return (
            <fieldset style={{display: "flex"}}>
                <legend>Local Storage</legend>
                <div>
                    <button onClick={this.getLocalData} className="get-local-data">get data from local storage</button>
                    <div  className="local-storage-output" style={{border: "1px solid black", width: "300px", height: "100px"}}>
                        {this.state.localStorageVal}
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <textarea onChange={this.onChangeInput} className={"local-storage-input"} style={{
                        width: "300px",
                        height: "150px"
                    }} type="text" placeholder="enter a new value of MYOptions"/>
                    <button onClick={this.changeLocalData} className="change-local-storage-data">change data to local storage</button>
                </div>
            </fieldset>
        );
    }
}


export default class Iter6 extends React.Component {
    render() {
        return (
            <section className='page iter6'>
                <History/>
                <Cookies/>
                <LocalStorage/>
            </section>

        );
    }
}
