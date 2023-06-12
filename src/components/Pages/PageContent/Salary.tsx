
import React from 'react'
import ButtonGroup from '../Component/Select/RenderButtons'

export default function Salary(){
    const ButtonArray:string[] = [
        "Less than $20/ day",
        "$21 - 25/ day",
        "$26 - 30/ day",
        "$31 - 35/ day",
        "More than $35/ day",
    ]
    return (
        <>
            <div className='Container'>
                <div className='TitleSize'>
                    What is the basic salary you are willing to offer?
                </div>
                <br />
                <ButtonGroup buttons = {ButtonArray}/>
            </div>
        </>
    )
}