import React from "react"

export default function Confirmation() {
    return (
        <>
            <div style={{ width: '814px' }}>

                <div className='TitleSize'>
                    Thank you for onboarding with us
                </div>
                <div className='TextSize'>
                    Before continuing, we need to verify your email address.
                    Please check your inbox for a confirmation link,
                </div>
                <div style={{ display: 'flex' }}>
                    <div className='TextSize'>
                        If you did not receive the email at janedoe@gmail.com, we can
                    </div>
                    <a className='TextLink'>resend it to you</a>

                </div>

            </div>
        </>
    )
}