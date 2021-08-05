import "./Iter7.css";
import $ from "jquery";
function Iter7() {
    $(document).ready(function () {
        let promiseInputField = document.querySelector('#promise-type-inp');
        let promiseUserName = document.querySelector('.user-name');
        let getRepoBtn = document.querySelector('.get-repo-btn');
        let body = document.querySelector('.iter7');
        let reposTable = document.querySelector('.repos-table');
        let tbody = document.querySelector('.repos-table tbody')
        let captionOfTableName = document.querySelector('.type-of-event');
        let radioInputs = document.querySelectorAll("input[type='radio']");
        let typeOfEvent = null;
        let codeImg = document.querySelector('.code img');

        for (let radio of radioInputs) {
            if (radio.checked) typeOfEvent = radio.id;
            radio.onchange = () => {
                typeOfEvent = radio.id;
                console.log('%c%s%c%s', '', 'new typeOfEvent: ', 'color: yellow', typeOfEvent);
                if (typeOfEvent === 'promise') {
                    codeImg.setAttribute('src', './images/promise.jpg')
                } else {
                    codeImg.setAttribute('src', './images/async.jpg')

                }
            }
        }

        promiseInputField.oninput = () => {
            promiseUserName.innerHTML = promiseInputField.value;
        }

        getRepoBtn.onclick = () => {
            let url = `https://api.github.com/users/${promiseInputField.value}/repos`;
            captionOfTableName.innerHTML = typeOfEvent;
            let insertedRows = document.querySelectorAll('.inserted');
            if (insertedRows) {
                for (let row of insertedRows) {
                    row.remove();
                }
            }
            if (typeOfEvent === 'promise') {
                getReposByPromises(url);
            } else {
                getReposByAsync(url);
            }
        }

// 1) с использованием Promise

        function getReposByPromises(url) {
            let promise = new Promise(((resolve, reject) => {
                // console.log(promise)
                fetch(url)
                    .then(response => {
                        if (response.ok) {
                            resolve(response.json());
                        } else {
                            reject(Error('status ' + response.status))
                        }
                    });
            }));
            promise
                .then(data => {
                    reposTable.classList.add('visible');
                    for (let repo of data) {
                        tbody.insertAdjacentHTML('afterbegin', `
                <tr class="inserted">
                    <td>${repo.id}</td>
                    <td>${repo.name}</td>
                </tr>`)
                    }
                })
                .catch(error => console.log('Ошибка: ' + error.message))
        }

// 2) с использованием async/await

        async function getReposByAsync(url) {
            try {
                let response = await fetch(url);
                let repos = await response.json();
                reposTable.classList.add('visible');
                for (let repo of repos) {
                    // console.log(repo)
                    tbody.insertAdjacentHTML('afterbegin', `
                <tr class="inserted">
                    <td>${repo.id}</td>
                    <td>${repo.name}</td>
                </tr>`)
                }
            } catch (err) {
                // console.log(err)
            }
        }
    })
    return (
        <div className='iter7'>
        <form action="">
            GET request: <input name="name" type="text" placeholder="Your name"/><br/>
            <input type="submit" value="Submit"/>
        </form>
        <hr/>
        <section className="iteration-task">
            <p className="descr">Введите имя пользователя github (например: MrCoul3)</p>
            <div className="block functionality">
                <div className="flex-box radio-conteiner">
                    <div className="flex-box" style={{flexDirection: 'column'}}>
                        <div className="flex-box">
                            <input id="promise" name="choose" type="radio" checked/>
                            <label htmlFor="promise">promises</label>
                        </div>
                        <div className="flex-box">
                            <input id="async/await" name="choose" type="radio"/>
                            <label htmlFor="async/await">async/await</label>
                        </div>
                    </div>

                    <input id="promise-type-inp" className="input text-input" type="url"
                           placeholder="enter any git-hub username"/>
                    <button className="input get-repo-btn">get repos</button>

                </div>
                <label style={{color: '#b8b8b8'}} htmlFor="promise-type-inp">https://api.github.com/users/<span
                    className="user-name"/>/repos</label>

                <table valign="left" border="1px" cellPadding="5px" className="repos-table">
                    <caption style={{fontWeight: "600"}}>Received repos by <span className="type-of-event"/>
                    </caption>
                    <thead align="left">
                    <tr>
                        <th>id</th>
                        <th>name</th>
                    </tr>
                    </thead>
                    <tbody align="left">
                    </tbody>
                </table>
            </div>

            <div className="block code">
                <img src="./images/promise.jpg" alt=""/>
            </div>
        </section>
        </div>
    );
}

export default Iter7;