import { useState } from "react";

export default function UserInput(){
    const [ userInputs, setUserInputs ] = useState({
        initialInvestment : 10000,
        annualInvestment : 1220,
        expectedReturn : 6,
        duration : 10
    })

    function handleChange( inputIdentifier, newValue ){
        setUserInputs((prevUserInputs)=>{
            return {
                ...prevUserInputs, 
                [inputIdentifier] : newValue
            }
        });
    }

    return(
        <section id="user-input">
            <div className="inpot-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                    type="number" required
                    onChange={(event)=> handleChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input 
                    type="number" required 
                    onChange={(event)=> handleChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="inpot-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                    type="number" required 
                    onChange={(event)=> handleChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                    type="number" required 
                    onChange={(event)=> handleChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    );
}