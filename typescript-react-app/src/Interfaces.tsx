import React from "react";

// взаимодействие с классами
interface SomeClass {
    readonly name: string
    getAge(age: number): number
}

class Name implements SomeClass {
    name = 'Nikolay';
    getAge(age: number): number {
        return age;
    }
}

interface Styles {
    [key: string]: string
}
const css: Styles = {
    border: '1px',
}
enum Constants {
    PI = 3.14,
    E = 2.43
}
const pi = Constants.PI;

function toUpper(str: string): string {
    return str.trim().toUpperCase();
}

export default function Interfaces() {

    interface Rect {
        readonly id: string
        color?: string
        size: {
            width: number
            height: number
        }
    }

    const rect1: Rect = {
        id: '1',
        size: {
            width: 20,
            height: 30
        },
        color: '#fff'
    }
    rect1.color = '#000';
    const rect2 = {} as Rect;

    interface RectWithArea extends Rect {
        getArea: () => number
    }
    const rect3: RectWithArea = {
        id: '11',
        size: {
            width: 10,
            height: 11
        },
        getArea():number {
           return  this.size.width * this.size.height
        }
    }

    interface IContact {

    }
    return (
      <div></div>
    );
}

