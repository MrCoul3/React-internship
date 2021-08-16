import React from "react";

// Обработка событий
export default function Click() {
    let testContainer = document.querySelector('#test-container');
    const clickEvent = () =>  {
        testContainer.insertAdjacentHTML("afterbegin", '<p>insert test function</p>');
    }
    return(
        <button style={{marginLeft: '100px'}} onClick={clickEvent} className={'test-button'}>click me</button>
    );
}