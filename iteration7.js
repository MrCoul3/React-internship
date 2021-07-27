'use strict'
console.log('%citeration 7.js init', 'font-style: italic; color: #fff');
console.log('_______________________________________')

/*
* Задание:
    - Отправить запросы на получение репозиториев любого пользователя github.com с последующим выведением данных на страницу:
*/
let promiseInputField = document.querySelector('#promise-type-inp');
let promiseUserName = document.querySelector('.user-name');
let getRepoBtn = document.querySelector('.get-repo-btn');
let body = document.querySelector('body');
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
console.log('default typeOfEvent: ' + typeOfEvent);

promiseInputField.oninput = () => {
    promiseUserName.innerHTML = promiseInputField.value;
}

getRepoBtn.onclick = () => {
    let url = `https://api.github.com/users/${promiseInputField.value}/repos`;
    captionOfTableName.innerHTML = typeOfEvent;
    if (typeOfEvent === 'promise') {
        getReposByPromises(url);
    } else {
        getReposByAsync(url);
    }
}

// 1) с использованием Promise

function getReposByPromises(url) {
    let promise = new Promise(((resolve, reject) => {
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
            console.log(data)
            reposTable.classList.add('visible');
            for (let repo of data) {
                console.log(repo)
                tbody.insertAdjacentHTML('afterbegin', `
                <tr>
                    <td>${repo.id}</td>
                    <td>${repo.name}</td>
                </tr>`)
            }

        })
        .catch(error => console.log('Ошибка: ' + error.message))
}



// еще вариант с использованием promises
console.log('%cеще вариант с использованием promises:', 'color: yellow')
let url = `https://jsonplaceholder.typicode.com/users`;
let request = fetch(url);
request
    .then(response => {
        // console.log({request});
        // console.log({response});
        let promise = new Promise((resolve, reject) => {
            (response.ok && response.status === 200) ? resolve(response.json()) : reject(Error(`${response.status}`));
        });
        promise
            .then(data => {
                console.table(data);
            })
            .catch(error => console.error(error));
    });





// 2) с использованием async/await

async function getReposByAsync(url) {
    try {
        let response = await fetch(url);
        let repos = await response.json();
        reposTable.classList.add('visible');
        for (let repo of repos) {
            console.log(repo)
            tbody.insertAdjacentHTML('afterbegin', `
                <tr>
                    <td>${repo.id}</td>
                    <td>${repo.name}</td>
                </tr>`)
        }
    } catch (err) {
        console.log(err)
    }
}

