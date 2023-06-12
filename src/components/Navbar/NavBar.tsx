import './styles.css'
import React from 'react'
import logo from '../../images/sojo_logo.jpg'

export default function NavBar() {
    return (
        <>
            <div className='TopBar'>
                <img src={logo} width = {207}/>
            </div>
        </>
    )
}