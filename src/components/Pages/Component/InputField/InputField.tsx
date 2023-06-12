import React from 'react';
import './styles.css'

export default function InputField({   
        placeholder,
        toptext,
        bottomtext
    }: {
        placeholder: string;
        toptext: string;
        bottomtext: string;
    }): React.ReactElement {
    return (
        <>
            <div className='InputField'>
                <div className='TopInputText'>{toptext}</div>
                <input type="text" placeholder={placeholder} />
                <div className='BottomInputText'>{bottomtext}</div>
            </div>
        </>
    )
}