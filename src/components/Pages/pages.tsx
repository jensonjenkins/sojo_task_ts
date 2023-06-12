import './styles.css'
import React from 'react';
import ProgressBar from "../ProgressBar/ProgressBar"
import { useMultiForm } from "../../useMultiForm"
import Years from './PageContent/Years';
import Type from './PageContent/Type';
import Amount from './PageContent/Amount';
import Qualifications from './PageContent/Qualifications';
import Details from './PageContent/Details';
import Confirmation from './PageContent/Confirmation';
import Salary from './PageContent/Salary';

export default function Pages():React.ReactElement {
    const pageArray:React.ReactElement[] = [<Type/>, <Amount/>, <Years/>, 
    <Qualifications/>, <Salary/>, <Details/>, <Confirmation/>];

    const { currentStep, steps, step, nextPage, prevPage} = useMultiForm(pageArray);

    return (
        <>
            <div style={{
                fontWeight: "300",
                fontSize: "14px",
                color: "#8D9091"
            }}>
                Step {currentStep + 1} of {steps.length}
            </div>
            <ProgressBar progress={((currentStep + 1) / steps.length) * 100} />

            <div>{step}</div>
            <div className='buttonContainer'>
                {(currentStep>0)&&<button className='Previous' onClick={prevPage} >Previous</button>}
                <button className='Next' onClick={nextPage}>Next</button>
            </div>
        </>
    )
}