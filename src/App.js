import Header from "./components/Header/Header";
import FormContainer from "./components/Class/Form";
import Table from "./components/Class/Table";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const calculationResult = (el) => {
    setData(el);
  };
  
  const renderTable = () => {
    return data.length === 0 ? (
      <p>Not found</p>
    ) : (
      <Table dataResult={data}/>
    );
  };
  return (
    <main>
      <Header></Header>
      <FormContainer onCalcResult={calculationResult}></FormContainer>
      {renderTable()}
    </main>
  );
}

export default App;
