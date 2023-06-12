import React, { useState } from "react";

interface Details{
    currentStep:number;
    nextPage():void;
    prevPage():void;
    step: React.ReactElement;
    steps: React.ReactElement[];
}

export function useMultiForm(steps : React.ReactElement[]):Details{
    const [currentStep, setCurrentStep] = useState(0);

    function nextPage():void{
        setCurrentStep(page=>{
            if(page>=steps.length -1){
                return page;
            }
            return ++page;
        })
    }

    function prevPage():void{
        setCurrentStep(page=>{
            if(page<=0){
                return page;
            }
            return --page;
        })
    }

    return {
        currentStep,
        nextPage,
        prevPage, 
        step : steps[currentStep],
        steps
    }
}