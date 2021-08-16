import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Iter4 from "./Iter4"
import Iter5 from "./Iter5"
import Iter6 from "./Iter6";
import Iter7 from "./Iter7";

const root = document.getElementById('pages');
const btnsContainer = document.getElementById('buttons-container');
render(insertBtns(), btnsContainer);
render(showPage(), root);

function render(arg1, arg2) {
    return ReactDOM.render(arg1, arg2);
}

function insertBtns() {
    return(
        <div>
            <button className={'choose-btn'}>4</button>
            <button className={'choose-btn'}>5</button>
            <button className={'choose-btn'}>6</button>
            <button className={'choose-btn'}>7</button>
        </div>
    );
}

function showPage() {
    let buttons = document.querySelectorAll('.choose-btn');
    let elem = null;
    let type = 'functionality';
    let authorName = 'Mr. Coul';

    for (let btn of buttons) {
        btn.addEventListener('click', function () {
            for (let btn of buttons) btn.classList.remove('button-active');
            btn.classList.add('button-active');
            if (this.innerHTML == 7) elem = <Iter7 type={type} author={authorName}/>;
            if (this.innerHTML == 6) elem = <Iter6 />;
            if (this.innerHTML == 5) elem = <Iter5 />;
            if (this.innerHTML == 4) elem = <Iter4 />;
            render(elem, root);

        })
    }
}




