import React from 'react';


export default function MyNoteApp() {
    const str: string = 'Hello';
    const isFetch: boolean = true;
    const int: number = 4;
     const numArray: number[] = [1,2];
     const numArr2: Array<number> = [3,4];
     const words: string[] = ['one', 'two'];
     // Tuple
    const contact: [string, number] = ['Name', 123456789];
    //Any
    let variable: any = 42;
    variable = 'New';
    function voidFunc(name: string): void {
        console.log(name);
    }
    function numberFunc(num: number): number {
        return num;
    }
    function test(): any {
        return str;
    }
    function err():never {
        throw new Error();
    }
    //never
    function infLoop(): never {
        while (true) {}
    }
    // свои типы данных
    type Login = string;
    const login: Login = 'admin';
    type ID = string | number;
    const id1: ID = 11 + 'as';
    type SomeType = null | undefined;

    return (
        <div></div>
    );
}