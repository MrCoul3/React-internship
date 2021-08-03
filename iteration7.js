'use strict'
console.log('%citeration 7.js init', 'font-style: italic; color: #fff');

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
// console.log('default typeOfEvent: ' + typeOfEvent);

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


// еще вариант с использованием promises
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
                // console.table(data);
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


async function loadJson(url) {

    let response = await fetch(url);
    if (response.status === 200) {
        let result = await response.json();
        return result;
    }
    throw new Error();
}

// loadJson('no').catch(console.log)

//Promise API

// Promise.all

//Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.
// let urls = [
//     'https://api.githsdub.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
// ];

// Преобразуем каждый URL в промис, возвращённый fetch
//let requests = urls.map(url => fetch(url));
//console.log(requests)

// Promise.all будет ожидать выполнения всех промисов
//Promise.all(requests)
//    .then(responses => responses.forEach(
//        response => console.log(`${response.url}: ${response.status}`)
//    ));

// Promise.allSettled
// продолжит выполнение даже если один из промисов завершится с ошибкой
// Promise.allSettled(urls.map(url => fetch(url)))
//     .then(results => { // (*)
//         results.forEach((result, num) => {
//             if (result.status == "fulfilled") {
//                 console.log(`${urls[num]}: ${result.value.status}`);
//             }
//             if (result.status == "rejected") {
//                 console.log(`${urls[num]}: ${result.reason}`);
//             }
//         });
//     });
//

// callback

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     script.onerror = () => callback(new Error('не удалось загрузить скрипт'))
//     document.head.append(script);
// }
//
// loadScript('./test.js', function (s) {
//     console.log(s)
// })

let condition = 1020;
let prom = new Promise((resolve, reject) => {
    if (condition == 100) {
        resolve(condition * 2);
    } else {
        reject(new Error('Error: condition is not 100'))
    }
}).then(response => {
    console.log(response)
}, error => {
    console.log(error.message)
})