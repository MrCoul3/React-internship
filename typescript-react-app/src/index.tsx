import React, {FormEvent, MouseEvent, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import Converter from "./Converter";
import Calculator from "./Calculator";

function getApi(url: string, method: "GET") {

    return fetch(url, {method})
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        // .then(data => data)
}


function ApiTestTS() {

    const input = useRef<HTMLInputElement>(null);
    // type PostsDataType = {id: number, title: string, body: string, userId: number};
    const [requestPostsData, setRequestPostsData] = useState();
    const getData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input !== null && input.current !== null) {
            const url: string = input.current.value;
            const method = "GET";
            const request = getApi(url, method)
            // console.log(request)
                .then(data => {
                    setRequestPostsData(data);
                });
        }
    }


    useEffect(() => {

    });


    return (
        <section className='Api-testTS-app'>

            <form onSubmit={getData} action="">
                <div className='input-group'>
                    <input ref={input} className='form-control' type="url" placeholder='enter a url of resource'/>
                    <input className='form-control' type="submit"/>
                </div>
            </form>
        </section>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Calculator/>
        {/*<Converter/>*/}
        <ApiTestTS/>
    </React.StrictMode>,
    document.getElementById('root')
);













// ============================================================
function greeter(fn: (a: string, b: number) => void) {
    fn('Hello', 12);
}

function print(s: string) {
    // console.log(s);
}

greeter(print);

type Func = {
    (arg2: number): boolean;
}

const myFunc = (someArg: number) => {
    return someArg > 5;
}

function someFunc(arg: Func) {
    // console.log( arg(22))
}
someFunc(myFunc)


const arr = ['ds', 2, 3];

function test2<T>(arr: T[]): void {
    // console.log(arr[0])
}

function test3<Type>(arr: Type[]): Type {
    return arr[1];
}

test3(arr);

function map<Inp, Out>(arr: Inp[], func: (arg: Inp) => Out): Out[] {
    return arr.map(func);
}

function longest<T extends { length: number }>(a: T, b: T) {
    if (a.length > b.length) {
        return a;
    } else {
        return b;
    }
}
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}
const arr1 = combine<number | string>([1,2], ['as', 'ss']);


function multiply(n: number, ...rest: number[]) {
    return rest.map((r) => n * r);
}
// 'a' gets value [10, 20, 30, 40]
const rest = [1, 2] as const;
const a = multiply(10, ...rest)
const arr2 = Math.atan2(...rest);
// arr2.push(...rest)
// console.log(arr2)

interface Box<Type> {
    contents: Type;
}
let box: Box<string> = {
    contents: 'someString'
}

type Point = { one: number; two: number };
type NewType = keyof Point;

let newObj: NewType = "one";

const bmw = { name: "BMW", power: "1000hp" };
type TypeBmw = typeof bmw; // {name: string, power: string}
type KeyBmw = keyof TypeBmw;
const opel: KeyBmw = 'name'; // or 'power'

const foo = { bar: 42 };
type Foo = typeof foo;
type KeyOfFoo = keyof Foo;
const bar: KeyOfFoo = 'bar'
type Two = "one" | "two";
const variable: Two = "one";

type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
const age: Age = 12;
type I1 = Person["age" | "name"];
const user1: I1 = 'Nik';
type I2 = Person[keyof Person];
const user2: I2 = 'sd'
type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];
const user3: I3 = true;

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];

type Person1 = typeof MyArray[number];
const pers1: Person1 = {name: 'as', age: 12};

