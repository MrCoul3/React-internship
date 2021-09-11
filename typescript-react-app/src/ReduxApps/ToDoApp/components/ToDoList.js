import {useSelector} from "react-redux";
import React from "react";

const selector = state => state;

export default function ToDoList() {

    const select = useSelector(selector);
    console.log(select)
    const render = select.map(obj => <div>{obj.text}</div>)


    return (
        <div className='body'>{render}</div>
    );
}
