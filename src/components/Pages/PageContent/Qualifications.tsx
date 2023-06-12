import React from 'react'
import ButtonGroup from '../Component/Select/RenderButtons'

export default function Qualifications() {
    const ButtonArray:string[] = [
        "Basic skill (SEC, SEC(K), SEC(K) higher skill certificates)",
        "Higher skill (CoreTrade, Multi-skill certificates with 4 years' experience)",
        "No preference"
    ]
    return (
        <>
            <div className='Container'>
                <div className='TitleSize'>
                    What type of worker are you looking for?
                </div>
                <br />
                <ButtonGroup buttons = {ButtonArray}/>
            </div>
        </>
    )
}