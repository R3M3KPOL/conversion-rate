import "./Input.css";
import { useState } from "react";
// import Buttons from "../Buttons/Buttons";
import "../Buttons/Buttons.css";
const InputsGroup = (props) => {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
  };

  const [inputsValue, setInputsValue] = useState({
    "current-savings": "0",
    "yearly-contribution": "0",
    "investment-duration": "0",
    "expected-return": "0",
  });

  const inputValues = (element) => {
    const { id, value } = element.target;
    setInputsValue((prevInputValue) => ({
      ...prevInputValue,
      [id]: value,
    }));

    props.resultValuesForInput(inputsValue);
  };
  // const result = (event) => {
  //   event.preventDefault()
  //   console.log(inputsValue)
  // }
  return (
    <>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            min="0"
            id="current-savings"
            onChange={inputValues}
            value={inputsValue["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            min="0"
            id="yearly-contribution"
            onChange={inputValues}
            value={inputsValue["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            min="0"
            id="expected-return"
            onChange={inputValues}
            value={inputsValue["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            min="0"
            id="investment-duration"
            onChange={inputValues}
            value={inputsValue["investment-duration"]}
          />
        </p>
      </div>
      {/* <div className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button" onClick={result}>
          Calculate
        </button>
      </div> */}
      {/* <Buttons></Buttons> */}
    </>
  );
};

export default InputsGroup;
