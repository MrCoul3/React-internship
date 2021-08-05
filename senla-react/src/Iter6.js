import $ from "jquery";
import './Iter6.css';

function Iter6() {
    let history = window.history;
    let stateObj = {name: 'MyHistory'};
    $(document).ready(() => {
        document.querySelector('.his-back-btn').onclick =()=> history.back();
        document.querySelector('.his-forward-btn').onclick = () => history.forward();
        document.querySelector('.push-state-btn').onclick = () => history.pushState(stateObj, 'new state', "iter5.html");
        document.querySelector('.replace-state-btn').onclick = () => history.replaceState(stateObj, 'second state', 'iter6.html');
        document.querySelector('.show-state-btn').onclick = () => document.querySelector('.show-state').value = history.state.name;
        document.querySelector('.link').addEventListener('click', () => window.location = "http://google.com"); // переход на новую страницу
        document.querySelector('.reload').addEventListener('click', () => {
            setTimeout(() => window.location.reload(), 1000);
        });

// cookie
        let cookieName = document.querySelector('.cookie-name');
        let cookieValue = document.querySelector('.cookie-value');

        function setCookie(name, value, opt = {}) {
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
        }

        function getCookie(name) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        let options = {
            path: 'SENLA',
            domain: 'localhost',
            'max-age': 3600,
            secure: true,
            samesite: 'strict'
        }

        document.querySelector('.set-cookie').addEventListener('click', () => {
            setCookie(cookieName.value, cookieValue.value, options);
        })

        document.querySelector('.get-cookie').addEventListener('click', () => {
            let cookie = getCookie(cookieName.value);
            document.querySelector('.show-cookie').value = cookie;
        });


// local storage

        localStorage.setItem('myOptions', JSON.stringify(options, null, 2));

        document.querySelector('.get-local-data').addEventListener('click', () => {
            document.querySelector('.local-storage-output').innerHTML = localStorage.getItem('myOptions');

        })

//методы перебора local stor

        let keys = Object.keys(localStorage);
        for (let key of keys) {
            // console.log(`${key}: ${localStorage.getItem(key)}`)
            // console.log(`${key}`)
        }

        for (let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue;
            }
            // console.log(`${key}: ${localStorage.getItem(key)}`)
        }

// console.log(Object.getOwnPropertyNames(localStorage))

        document.querySelector('.change-local-storage-data').addEventListener('click', () => {
            let localStorInput = document.querySelector('.local-storage-input');
            if (localStorInput.value.trim() !== '') {
                localStorage.setItem('myOptions', localStorInput.value.toString());
            }

        });

        window.onstorage = e => {
            // console.log(e)
        }
    });
    return (

        <div className="iter6">
            <fieldset>
                <legend>History</legend>
                <button className={"link"}>go to GOOGLE</button>
                <button className={"reload"}>reload page</button>
                <button className={"his-back-btn"}>
                    back
                </button>
                <button className={'his-forward-btn'}>forward -></button>
                <button className={'push-state-btn'}>push new history page</button>
                <button className={'replace-state-btn'}>replace history state</button>
                <div>
                    <button className={'show-state-btn'}>show history state</button>
                    <input disabled className={"show-state"} type="text" placeholder="result of history state"/>
                </div>
            </fieldset>

            <fieldset>
                <legend>Cookies</legend>
                <div>
                    <input className="cookie-input cookie-name" type="text" placeholder="cookie name"/>
                    <input className="cookie-input cookie-value" type="text" placeholder="cookie value"/>
                    <button className="set-cookie">set cookie</button>
                    >
                    <button className="get-cookie">get cookie</button> >
                    <input disabled className="show-cookie" type="text" placeholder="result of getCookie"/>
                </div>
            </fieldset>

            <fieldset style={{display: "flex"}}>
                <legend>Local Storage</legend>
                <div>
                    <button className="get-local-data">get data from local storage</button>
                    <div className="local-storage-output"
                         style={{border: "1px solid black", width: "300px", height: "100px"}}/>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <textarea className={"local-storage-input"} style={{
                        width: "300px",
                        height: "150px"
                    }} type="text" placeholder="enter a new value of MYOptions"/>
                    <button className="change-local-storage-data">change data to local storage</button>
                </div>
            </fieldset>
        </div>
    );
}

export default Iter6