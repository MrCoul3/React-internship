import {useDispatch} from "react-redux";
import React, {useState} from "react";

export default function Header() {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState();
    const handleChange = (e) => setInputValue(e.target.value)

    function handleKeyDown(e) {
        const InputDataTrimmed = e.target.value.trim();
        if (e.key === 'Enter' && InputDataTrimmed) {
            dispatch({type: 'add', payload: InputDataTrimmed})
            setInputValue('');
        }
    }


    return (
        <header>
            <div className="header-bg header-bg--todoBg flex-box align-items-center justify-content-center">
                <h1 className='title main-title h2'><span className='text-warning'>ToDo</span></h1><p className='text-muted'>Redux</p>
            </div>
            <div className='text-center mt-3'>
                <input
                    onChange={handleChange}
                    value={inputValue}
                    className='form-control w-50 m-auto'
                    onKeyDown={handleKeyDown}
                    autoFocus={true}
                    type="text"
                />
            </div>
        </header>
    );
}