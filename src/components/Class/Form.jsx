import "./Form.css";
import InputsGroup from "../InputGroup/Input";
import Buttons from "../Buttons/Buttons";
import { useState } from "react";
const FormContainer = () => {
  const [inputData, setInputData] = useState({})

  const result = (data) => {
    setInputData(data);
  };

  return (
    <form className="form">
      <InputsGroup resultValuesForInput={result}></InputsGroup>
      <Buttons resultValues={inputData}></Buttons>
    </form>
  );
};

export default FormContainer;
