import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const setAppData = (el) => {
    setData(el);
  };

  return (
    <MyContext.Provider value={{ data, setAppData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useData = () => {
  return useContext(MyContext);
};
