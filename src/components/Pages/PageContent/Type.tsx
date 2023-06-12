import React from 'react'
import Dropdown from '../Component/Dropdown/Dropdown'

export default function Type() {
    return (
        <>
            <div className='Container'>

                <div className='TitleSize'>What type of worker are you looking for?</div>
                <div className='TextSize'>Onboard with us and start finding workers to hire</div>
                <br />
                <Dropdown />

            </div>
        </>
    )
}