import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import { useState } from "react";

function App() {
    const [ userInputs, setUserInputs ] = useState({
        initialInvestment : 10000,
        annualInvestment : 1200,
        expectedReturn : 6,
        duration : 10
    })

    const inputIsValid = userInputs.duration >= 1;

    function handleChange( inputIdentifier, newValue ){
        setUserInputs((prevUserInputs)=>{
            return {
                ...prevUserInputs, 
                [inputIdentifier] : +newValue
            }
        });
    }

  return (
    <>
      <Header/>
      <UserInput onChange={handleChange} userInputs={userInputs} />
      { !inputIsValid && <p className="center"> Please enter a duration greater than zero.</p> }
      { inputIsValid && <Results input={userInputs} />}
    </>
  )
}

export default App
