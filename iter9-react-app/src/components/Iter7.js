import "../styles/Iter7.css";
import React from "react";
import $ from "jquery";


class Form extends React.Component {
    render() {
        return (
            <form action="">
                GET request: <input name="name" type="text" placeholder="Your name"/><br/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}


class GetRepositories extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.getRepos = this.getRepos.bind(this);
        this.getRepoByPromise = this.getRepoByPromise.bind(this);
        this.state = {
            src: './images/promise.jpg',
            username: '',
            choose: 'promise', // promise || async
            url: '',
            tableClasses: 'repos-table',
            tableData: [],
        }
    }

    onChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
            tableData: [],
            tableClasses: 'repos-table'
        })
    }

    getRepoByPromise() {
        let promise = new Promise(((resolve, reject) => {
            fetch(this.state.url)
                .then(response => {
                    if (response.ok) {
                        resolve(response.json());
                    } else {
                        reject(Error('status ' + response.status))
                    }
                });
        }));
        promise
            .then(repos => {
                this.setState({
                    tableClasses: `${this.state.tableClasses} visible`
                })
                for (let repo of repos) {
                    this.setState({
                        tableData: this.state.tableData.concat(<tr className="inserted">
                            <td>{repo.id}</td>
                            <td>{repo.name}</td>
                        </tr>)
                    });
                }
            })
            .catch(error => console.log('Ошибка: ' + error.message))
    }

    async getReposByAsync() {
        try {
            let response = await fetch(this.state.url);
            let repos = await response.json();
            this.setState({
                tableClasses: `${this.state.tableClasses} visible`
            })
            for (let repo of repos) {
                this.setState({
                    tableData: this.state.tableData.concat(<tr className="inserted">
                        <td>{repo.id}</td>
                        <td>{repo.name}</td>
                    </tr>)
                });
            }
        } catch (err) {
            console.log(err)
        }
    }

    getRepos() {
        this.setState({
            tableData: []
        });
        this.state.choose === 'promise' ? this.getRepoByPromise() : this.getReposByAsync();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.choose !== prevState.choose) {
            this.setState({
                src: this.state.choose === 'promise' ? './images/promise.jpg' : './images/async.jpg',
            })
        }
        if (this.state.username !== prevState.username) {
            this.setState({
                url: `https://api.github.com/users/${this.state.username}/repos`
            })
        }
    }


    render() {
        return (
            <div className="iteration-task">
                <div className="flex">
                    <p className="descr">Введите имя пользователя github (например: MrCoul3)</p>
                    <div className="block functionality">
                        <div className="flex-box radio-container">
                            <div className="flex-box" style={{flexDirection: 'column'}}>
                                <div className="flex-box">
                                    <input onChange={this.onChange} value='promise' id="promise" name="choose"
                                           type="radio" defaultChecked={true}/>
                                    <label htmlFor="promise">promises</label>
                                </div>
                                <div className="flex-box">
                                    <input onChange={this.onChange} value='async' id="async-await" name="choose"
                                           type="radio"/>
                                    <label htmlFor="async-await">async/await</label>
                                </div>
                            </div>
                            <input name='username' onChange={this.onChange} id="promiseinp" className="input text-input"
                                   type="url" placeholder="enter any git-hub username"/>
                            <button onClick={this.getRepos} className="input get-repo-btn">get repos</button>

                        </div>
                        <label style={{color: '#b8b8b8'}} htmlFor="promise-type-inp">https://api.github.com/users/
                            <span className="user-name">{this.state.username}</span>/repos
                        </label>

                        <table valign="left" border="1px" cellPadding="5px" className={this.state.tableClasses}>
                            <caption style={{fontWeight: "600"}}>Received repos by <span
                                className="type-of-event">{this.state.choose}</span>
                            </caption>
                            <thead align="left">
                            <tr>
                                <th>id</th>
                                <th>name</th>
                            </tr>
                            </thead>
                            <tbody align="left">
                            {this.state.tableData}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="block code">
                    <img src={this.state.src} alt="code"/>
                </div>
            </div>
        );

    }
}

export default class Iter7 extends React.Component {
    render() {
//         $(document).ready(() => {
//             function script() {
//                 let promiseInputField = document.querySelector('#promise-type-inp');
//                 let promiseUserName = document.querySelector('.user-name');
//                 let getRepoBtn = document.querySelector('.get-repo-btn');
//                 let reposTable = document.querySelector('.repos-table');
//                 let tbody = document.querySelector('.repos-table tbody')
//                 let captionOfTableName = document.querySelector('.type-of-event');
//                 let radioInputs = document.querySelectorAll("input[type='radio']");
//                 let typeOfEvent = null;
//                 let codeImg = document.querySelector('.code img');
//
//                 for (let radio of radioInputs) {
//                     if (radio.checked) typeOfEvent = radio.id;
//                     radio.onchange = () => {
//                         typeOfEvent = radio.id;
//                         if (typeOfEvent === 'promise') {
//                             codeImg.setAttribute('src', './images/promise.jpg')
//                         } else {
//                             codeImg.setAttribute('src', './images/async.jpg')
//                         }
//                     }
//                 }
//
//
//                 getRepoBtn.onclick = () => {
//                     let url = `https://api.github.com/users/${promiseInputField.value}/repos`;
//                     captionOfTableName.innerHTML = typeOfEvent;
//                     let insertedRows = document.querySelectorAll('.inserted');
//                     if (insertedRows) {
//                         for (let row of insertedRows) {
//                             row.remove();
//                         }
//                     }
//                     if (typeOfEvent === 'promise') {
//                         getReposByPromises(url);
//                     } else {
//                         getReposByAsync(url);
//                     }
//                 }
//
// // 1) с использованием Promise
//                 function getReposByPromises(url) {
//                     let promise = new Promise(((resolve, reject) => {
//                         // console.log(promise)
//                         fetch(url)
//                             .then(response => {
//                                 if (response.ok) {
//                                     resolve(response.json());
//                                 } else {
//                                     reject(Error('status ' + response.status))
//                                 }
//                             });
//                     }));
//                     promise
//                         .then(data => {
//                             reposTable.classList.add('visible');
//                             for (let repo of data) {
//                                 tbody.insertAdjacentHTML('afterbegin', `
//             <tr class="inserted">
//                 <td>${repo.id}</td>
//                 <td>${repo.name}</td>
//             </tr>`)
//                             }
//                         })
//                         .catch(error => console.log('Ошибка: ' + error.message))
//                 }
//
// // 2) с использованием async/await
//                 async function getReposByAsync(url) {
//                     try {
//                         let response = await fetch(url);
//                         let repos = await response.json();
//                         reposTable.classList.add('visible');
//                         for (let repo of repos) {
//                             // console.log(repo)
//                             tbody.insertAdjacentHTML('afterbegin', `
//             <tr class="inserted">
//                 <td>${repo.id}</td>
//                 <td>${repo.name}</td>
//             </tr>`)
//                         }
//                     } catch (err) {
//                         // console.log(err)
//                     }
//                 }
//
//
//             }
//
//             script();
//         });
        return React.createElement('section', {className: 'page iter7'},
            <>
                <Form/>
                <hr/>
                <GetRepositories/>
            </>);
    }
}
