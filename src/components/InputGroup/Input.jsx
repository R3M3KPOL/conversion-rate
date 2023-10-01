import "./Input.css";
import { useState } from "react";
import "../Buttons/Buttons.css";
// import Buttons from "../Buttons/Buttons";
const InputsGroup = (props) => {


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

    // props.resultValuesForInput(inputsValue);
  };
  const result = (event) => {
    event.preventDefault();
    props.onCalculate(inputsValue);
    setInputsValue({
      "current-savings": "0",
      "yearly-contribution": "0",
      "investment-duration": "0",
      "expected-return": "0",
    });
  };
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
      <div className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button" onClick={result}>
          Calculate
        </button>
      </div>
      {/* <Buttons></Buttons> */}
    </>
  );
};

export default InputsGroup;
