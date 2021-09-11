import {useDispatch, useSelector} from "react-redux";
import React from "react";

const selector = state => state;

export default function ToDoList() {
    const dispatch = useDispatch();

    const handleSelectNote = () => {
        dispatch({type: 'selectNote', selected: true})
    }

    const select = useSelector(selector);

    console.log(select)
    const render = select.map(obj => <div onClick={handleSelectNote}>{obj.text}</div>)


    return (
        <div className='body'>{render}</div>
    );
}
