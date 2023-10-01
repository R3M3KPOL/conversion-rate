import "./Form.css";
import InputsGroup from "../InputGroup/Input";
// import Buttons from "../Buttons/Buttons";
import { useState } from "react";
const FormContainer = (props) => {
  const yearlyData = []; // per-year results
  const [data, setData] = useState(yearlyData);
  const calculateHandler = (inputsValue) => {
    let currentSavings = +inputsValue["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +inputsValue["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +inputsValue["expected-return"] / 100;
    const duration = +inputsValue["investment-duration"];
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      setData(
        yearlyData.push({
          // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
          initialInvestment: Number(inputsValue["current-savings"]),
        })
      );
    }
    props.onCalcResult(data);
  };
  // do something with yearlyData ...
  return (
    <form className="form">
      <InputsGroup onCalculate={calculateHandler}></InputsGroup>
    </form>
  );
};

export default FormContainer;
