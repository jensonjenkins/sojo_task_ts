import React from 'react';

export default function Dropdown() :React.ReactElement{
    return (
        <>
            <select id="JobOptions" style={{width:"561px", 
                                            borderRadius:"5px",
                                            border:"2px solid #0166C0",
                                            paddingLeft:"5px"}}>
                <option value="Welder">Welder</option>
                <option value="Plumbing & pipe fitter">Plumbing & pipe fitter</option>
                <option value="Steel fitter">Steel fitter</option>
                <option value="Electrical wiring technician">Electrical wiring technician</option>
                <option value="Excavator operator">Excavator operator</option>
                <option value="Rigger/Signalman">Rigger/Signalman</option>
                <option value="General worker">General worker</option>
                <option value="Lifting supervisor">Lifting supervisor</option>
                <option value="Safety coordinator">Safety coordinator</option>
                <option value="Driver">Driver</option>
            </select>

        </>
    )
}