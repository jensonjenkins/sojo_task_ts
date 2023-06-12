
import React from 'react'
import ButtonGroup from '../Component/Select/RenderButtons'

export default function Years() {

    const ButtonArray: string[] = [
        "Less than 3 years (cannot qualify for Man Year Entitlement waiver)",
        "More than 3 years (can qualify for Man Year Entitlement waiver)",
        "No preference"
    ]

    return (
        <>
            <div className='Container'>
                <div className='TitleSize'>
                    How many years of experience do you prefer in the workers?
                </div>
                <br />
                <ButtonGroup buttons = {ButtonArray}/>

            </div>
        </>
    )
}