import React, {useState, useRef, useEffect, useCallback} from 'react';


function useConvertTo(value: number): number {
    const [val, setValue] = useState<number>();

    useEffect(()=>{
        setValue((value * 9/5) + 32)
    }, [value])

    return val as number;
}

interface IProps {
    num: number
}

function Thermometer(props: IProps) {
    return (
        <p className='m-0'>Fahrenheit <span className='fw-bold text-success'>{props.num}</span></p>
    );
}

export default function Converter() {

    const tempValue = useRef<HTMLInputElement>(null);
    const [temp, setTemp] = useState<number>(0);

    const convert =  useCallback(() => {
        if (tempValue && tempValue.current) {
            const value: number = +tempValue.current.value;
            setTemp(value);
        }
    }, [tempValue]);

    useEffect(()=> {
        if (tempValue && tempValue.current) {
            tempValue.current.value = '';
        }
    })


    return (
        <div className='text-center'>
            <header>
                <div className="header-bg">
                    <h1 className='text-white h2'><span className='text-warning'>S</span>imple React Converter <span className='text-muted small'>on TS</span> </h1>
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