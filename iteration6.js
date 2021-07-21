'use strict'

// alert('Alert выводится с помощью функции alert(\'str\'), браузер ждет, пока пользователь не нажмет OK')

// получение текущего URL
console.log({location})
console.log(location.href)

// history
document.querySelector('.link').addEventListener('click', () => location = "http://google.com"); // переход на новую страницу

document.querySelector('.reload').addEventListener('click', () => {
    setTimeout(() => location.reload(), 1000);
});

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

document.querySelector('.change-local-storage-data').addEventListener('click', () => {
    let localStorInput = document.querySelector('.local-storage-input');
    if (localStorInput.value.trim() !== '') {
        localStorage.setItem('myOptions', localStorInput.value.toString());
    }

});

window.onstorage = e => {
    console.log(e)
}

/** debuggin в консоли
* */
console.log("%c_____Debugging в консоли________", "color: gray; font-weight: 700; font-size: 22px");

// подстановки строк
console.log('%cподстановки строк:', 'padding: 10px 0; font-weight: 700; font-size: 20px; font-style: italic')
console.log('слово %s', 'xx');
console.log('цифра %i', 2222);
console.log('объект %o', options);
console.log('float %f', 22.2);


console.log('%cкрасивое логирование:', 'padding: 10px 0; font-weight: 700; font-size: 20px; font-style: italic')
console.log(
    '%c%s%c%s',
    'color: yellow; font-size: 24px',
    'Some yellow text',
    'color: blue; font-size: 20px',
    'Some yellow text'
)

let anotherText = "Another Text";
console.log(`%c${anotherText}`, "color: white; background: #4600FFE5; padding: 20px")

console.log(
    '%c%s%c%s',
    'padding: 10px 0 0; font-weight: 700; font-size: 20px; font-style: italic',
    'логирование в фигурных скобках:\n',
    'padding: 2px 0; font-weight: 300; font-size: 16px; font-style: italic; color: #8f8f8f',
    'аккуратное логирование: ключ - имя переменной, а значение сам объект'

)
console.log({options}); // аккуратное логирование ключ - имя переменной, а значение сам объект
console.log({anotherText})


// логирование в виде таблицы
function tableMethod() {
    const problems = [
        {id: 1, name: 'Onw'},
        {id: 2, name: 'Two'},
        {id: 3, name: 'Free'},
        {id: 4, name: 'Four'},
    ]
    console.table(problems)
}
console.log('%ctable method:', 'padding: 10px 0; font-weight: 700; font-size: 20px; font-style: italic')
tableMethod()

// debugger; // на этой строке выполнение кода остановится

function assertMethod(x, b) {
    let errorMs = 'результат вычитания (b - x) < 50';
    let result1 = b - x;

    console.assert((b - x) > 50, {result: result1, error: errorMs});
}
console.log('%cassert method:', 'padding: 10px 0; font-weight: 700; font-size: 20px; font-style: italic')
assertMethod(100, 70);

console.log('%cerror/warn/trace/group method:', 'padding: 10px 0; font-weight: 700; font-size: 20px; font-style: italic')
function errorMethod(string) {
    function checkingFunction() {
        console.trace();
        if (typeof string != 'string') {
            console.group('group warning');
            console.warn('You must enter only a string type data');
            console.group('group error');
            console.error(`Type Error: ${string} is not string type`);
            console.error(`Type Error: ${string} is a number`);
            console.groupEnd();
        }
    }
    checkingFunction();
}
errorMethod(1);



