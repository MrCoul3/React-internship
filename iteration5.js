// ITERATION_5
'use strict'

// arrow functions

let ask = () => confirm("Вы согласны?") ? alert("Вы согласились.") : alert("Вы отменили выполнение.")

let btn = document.querySelector('button');
let btnChangeColor = elem => elem.style.background = 'red';

btn.addEventListener('click', function () {
    btnChangeColor(this);
    ask();
})

// default parameters

function defParams(x, y = 0) {
    return x + y;
}
console.log(defParams(10))

// spread/rest

let spreadArray = [1, 2, 12];

function sum(...args) { // rest parameter
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
let result1 = sum(...spreadArray); // spread parameter
console.log(result1)


// super keyword/classes

class MyClass {
    constructor(name) {
        this.name = name;
        this.age = '22'
    }

    surname = "Ivanov"; // свойсвто класса

    getAge() {
        // console.log(this.age + ' ' + this.surname);
        return this.age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log('имя короткое')
            return;
        }
        this._name = value;
    }

}

let myClass = new MyClass('Николай');
console.log(myClass.name)
myClass.getAge()

class MyTwoClass extends MyClass {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    getNameAge() {
        let age = super.getAge();
        console.log(age)
        return age + this.name;
    }

}

let myTwoClass = new MyTwoClass('Николай', 24);
console.log(myTwoClass.getNameAge());


// yield

function* yieldFunc(arg1, arg2) {
    let first = arg1 + arg2;
    yield first; // yield как return
    let second = first + arg2;
    yield second;
    yield second - first;
    // return second - first;
}
let yieldGenerator = yieldFunc(10, 20);

// console.log(yieldGenerator.next())
// console.log(yieldGenerator.next())
// console.log(yieldGenerator.next())

for (let val of yieldGenerator) {
    console.log(val)
}


// деструктуризация объекта + строковые шаблоны

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {
    width: w,
    weight: www = 222,
    ...someArr
} = options;
console.log(someArr)


let elements = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

let {
    size,
    items: [elem1, item2],
    title = "Menu"
} = elements;

console.log(elem1)
console.log(size)


function show({title = 'Default Title', width: w = 0, height = 0} = {}) {
    console.log(`${title}: 
            width = ${w}px
            height = ${height}px`);
}
show();
show(options);


console.log('------------------------------------------------')


let arr = [1, 2, 3];
console.log("isArray? " + Array.isArray(arr))

arr.forEach(function (item) {
    console.log("forEach: " + item)
});

let newArr = arr.map(function (item, i) {
    return item * i;
})

console.log(`arr.map: ${newArr}`)

let filterArr = arr.filter(function (item) {
    return item > 1;
})
console.log("arr.filter: " + filterArr)

let reduceResult = arr.reduce(function (prevVal, curVal) {
    // prevVal = 0, curVal = 1 -> 0+1 = 1;
    // prevVal = 1, curVal = 2 -> 1+2 = 3;
    // prevVal = 3, curVal = 3 -> 3+3 = 6;
    return prevVal + curVal; // 6
}, 10)

console.log("[reduce] | результать метода: " + reduceResult)


let everyMethod = arr.every(function (elem) {
    return elem < 0;
});

let someMethod = function (num) {

    return num === 2;
};
console.log("[every] | в массиве [1,2,3] все числа меньше нуля: " + everyMethod)
console.log("[some] | в массиве [1,2,3] одно из чисел равно 2: " + arr.some(someMethod))


console.log(Date.now())
let date = new Date();
console.log(date.toISOString())
console.log(date.toJSON())


let user = {
    name: 'John',
    surname: 'Smith',

    get fullName() {
        return `${this.name} ${this.surname}`
    },

    set fullName(val) {
        [this.name, this.surname] = val.split(" ");
    }
}
user.fullName = 'Nikolay Ivanov';

console.log(user.fullName)

Object.defineProperty(user, "lang", {
    value: "ru",
    writable: true,
    configurable: true,
    enumerable: true
});

user.lang = "en";
console.log(user.lang);

Object.defineProperty(user, "fullLanguage", {
    get() {
        return `${this.lang}glish`;
    },

});
console.log(user.fullLanguage);

let me = Object.create(user);
console.log(me)

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor)
console.log(JSON.stringify(descriptor, null, 2))
let descrNames = Object.getOwnPropertyNames(user);
console.log(descrNames)

let map = new Map();
let obj = {name: 'nik', age: '23'};
let forMapFunc = () => console.log('forMapFunc');
map.set(1, "str1");
map.set(me, "obj me");
map.set(obj, "object");
map.set(forMapFunc, obj);
map.delete(me);
console.log(map)
console.log(map.size)
console.log(map.has(1)) // true

for (let m of map.keys()) {
    console.log(m)
}
for (let m of map.values()) {
    console.log(m)
}
for (let m of map) {
    console.log(m)
}

let john = {name: "John"};
let nik = {name: "Nik"};
let set = new Set();
set.add(john);
set.add(john);
set.add(nik);
set.add(nik);
// set.clear();
// console.log(set)
// console.log(set.size)
for (let s of set.entries()) {
    // console.log(s)
}
set.forEach((val, valAgain, set) => {
    // console.log(set);
})


// promises

let condition = true;

let action = new Promise(function (resolve, reject) {
    if (condition) {
        let positive = {
            type: 'plus',
            direction: 'row'
        };
        resolve(positive);
    } else {
        let negative = new Error(`condition is ${condition}`);
        reject(negative);
    }
})
action
    .then((fulfilled) => {
    console.log(fulfilled)
    fulfilled.type = "second then"
    return fulfilled;
}).then((fulfilled) => {
    console.log(fulfilled);
    fulfilled.direction = "column";
    return fulfilled;
}).then((fulfilled) => {
    console.log(fulfilled)
})
    .catch((error) => console.log(error.stack))
    .finally(() => console.log('finally is done'))

// action
//     .then(
//         function (fulfilled) {console.log(fulfilled) },
//         function (error) {console.log(error)}
//     )

// SYMBOLS

let id = Symbol('id');
let id2 = Symbol('id');
console.log( id.description);

user[id] = 1;
user[id2] = 2;
console.log(user)

let globalSym = Symbol.for('id');
console.log(Symbol.keyFor(globalSym)); // global
console.log(Symbol.keyFor(id));

let arrFrom = Array.from([1,2,3], x => x * 2);
console.log(arrFrom)

let string = "5";
// string = string.padStart(10,9);
string = string.padEnd(5,1);
console.log(string)

console.log(user)
console.log(Object.entries(user));
console.log(Object.values(user));


