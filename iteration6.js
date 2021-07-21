'use strict'

// alert('Alert выводится с помощью функции alert(\'str\'), браузер ждет, пока пользователь не нажмет OK')

// получение текущего URL
console.log(location)
console.log(location.href)

// history
document.querySelector('.link').addEventListener('click', () => location = "http://google.com"); // переход на новую страницу

document.querySelector('.reload').addEventListener('click', ()=> {
    setTimeout(()=>location.reload(), 1000);
} );

console.log(navigator.userAgent)
console.log(navigator.platform)



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

document.querySelector('.set-cookie').addEventListener('click', ()=> {
    setCookie(cookieName.value, cookieValue.value, options);
})

document.querySelector('.get-cookie').addEventListener('click', ()=> {
   let cookie = getCookie(cookieName.value);
   document.querySelector('.show-cookie').value = cookie;
});


// local storage

localStorage.setItem('myOptions', JSON.stringify(options, null, 2));

document.querySelector('.get-local-data').addEventListener('click', ()=>{
    document.querySelector('.local-storage-output').innerHTML = localStorage.getItem('myOptions');

})

//методы перебора local stor

let keys = Object.keys(localStorage);
for (let key of keys) {
    console.log(`${key}`)
    console.log(`${key}: ${localStorage.getItem(key)}`)
}

for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
        continue;
    }
    // console.log(`${key}: ${localStorage.getItem(key)}`)
}

// console.log(Object.getOwnPropertyNames(localStorage))

document.querySelector('.change-local-storage-data').addEventListener('click', ()=>{
    let localStorInput = document.querySelector('.local-storage-input');
    if (localStorInput.value.trim() !== '') {
        localStorage.setItem('myOptions', localStorInput.value.toString());
    }

});

window.onstorage = e => {
    console.log(e)
}

console.log('____________________________')

const errorMsg = '# не чётное число';
for (let number = 2; number <= 5; number += 1) {
    console.log('# равно ' + number);
    console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});
    // или, при использовании сокращения имён свойств в ECMAScript 2015:
    // console.assert(number % 2 === 0, {number, errorMsg});
}

console.log('слово %s', 'foo');
