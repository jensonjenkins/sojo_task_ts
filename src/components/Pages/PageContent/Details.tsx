import React from 'react'
import InputField from '../Component/InputField/InputField'

export default function Details() {
    return (
        <>
            <div className='TitleSize'>Company Details</div>
            <br />
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <InputField
                    toptext={"Company Email"}
                    bottomtext={"Enter an email"}
                    placeholder={"Raja@gmail.com"}
                />
                <InputField
                    toptext={"Company Name"}
                    bottomtext={"Enter company name"}
                    placeholder={"Raja Ptd Ltd"}
                />
                <InputField
                    toptext={"Company UEN"}
                    bottomtext={"Enter UEN"}
                    placeholder={"202077463H"}
                />
                <InputField
                    toptext={"Company Contact Number"}
                    bottomtext={"Enter a contact number"}
                    placeholder={"83728237"}
                />
            </div>
            <div style={{
                marginTop: '32px',
                display: 'flex',
                flexDirection: 'row',
                width: '561px',
            }}>
                <input type="checkbox" id="TSP" />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 8px',

                }}>
                    <div className='TSPSize'>Terms, Services & Privacy</div>

                    <div
                        className='TSPInfoSize'
                        style={{
                            marginTop: '8px'
                        }}>
                        By using this website you agree to our terms of
                        service and privacy policy, which includes providing
                        certain personal information that will be collected and used
                        in accordance with the policy and safeguarded by appropriate
                        security measures.</div>
                </div>
            </div>
        </>
    )
}       