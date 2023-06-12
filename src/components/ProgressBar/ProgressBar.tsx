import React from 'react';
import './styles.css';

export default function ProgressBar({progress}:{progress:number}):React.ReactElement{
    return(
        <div className='MainBar'>
            <div 
            className='Progress'
            style = {{width:`${progress}%`}}
            ></div>
        </div>
    )
}