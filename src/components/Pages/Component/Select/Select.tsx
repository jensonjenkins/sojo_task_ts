import React from 'react';
import './styles.css'

export default function Select({
        state, 
        text, 
        onClick
    }:{
        state:"Active"|"";
        text:string;
        onClick:React.MouseEventHandler<HTMLButtonElement>;
    }):React.ReactElement {
    return (
        <>
            <button className={`SelectContainer${state}`} onClick = {onClick}>
                <div className={`checkmark${state}`}/>
                {text}
            </button>
        </>
    )
}