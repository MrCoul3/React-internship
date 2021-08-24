import React, {useState, useRef, useEffect, useCallback} from 'react';

function useConvertTo(value) {
    const [val, setValue] = useState();

    useEffect(()=>{
        setValue((value * 9/5) + 32)
    })

    return val;
}

function Thermometer(props) {
    return (
        <p className='m-0'>Fahrenheit <span className='fw-bold text-success'>{props.num}</span></p>
    );
}

export default function Converter() {

    const tempValue = useRef(null);
    const [temp, setTemp] = useState(0);

    const convert =  useCallback(() => {
        setTemp(tempValue.current.value);
    }, [tempValue]);

    useEffect(()=> {
        // console.log(tempValue.current.value)
        tempValue.current.value = '';
    })


    return (
        <div className='text-center'>
            <header>
                <div className="header-bg">
                    <h1 className='text-white h2'><span className='text-warning'>S</span>imple React Converter</h1>
                </div>
            </header>
            <div className='form-group '>
                <input ref={tempValue} className='form-control m-auto w-25' placeholder='enter a temperature in celsius' type="number"/>
            </div>
            <Thermometer num={useConvertTo(temp)}/>
            <button onClick={convert} className='btn btn-success m-2'>to Fahrenheit </button>
        </div>
    );
}

