import InputField from '../Component/InputField/InputField'
import React from 'react'

export default function Amount() {
    return (
        <>
            <div className="Container">
                <div className='TitleSize'>How many workers are you looking to hire?</div>
                <br/>
                <InputField 
                    placeholder="(e.g. 5)"
                    toptext="Number Of Workers"
                    bottomtext="Enter number of workers"/>
            </div>
        </>
    )
}