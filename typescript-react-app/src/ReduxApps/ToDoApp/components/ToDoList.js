import {useDispatch, useSelector} from "react-redux";
import React from "react";

const selector = state => state;

export default function ToDoList() {
    const dispatch = useDispatch();

    const handleSelectNote = (e) => {
        dispatch({type: 'selectNote', id: e.target.id})
    }

    const select = useSelector(selector);

    console.log(select)
    const render = select.map(obj => <div id={obj.id} onClick={handleSelectNote}>{obj.text}</div>)


    return (
        <div className='body'>{render}</div>
    );
}
