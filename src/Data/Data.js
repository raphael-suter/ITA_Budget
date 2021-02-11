import React, { createContext, useState } from "react";

const DataContext = createContext({});

const DataContextProvider = ({ children }) => {
  const [budget, setBudget] = useState(["1", "2", "3"]);
  const value = { budget, setBudget };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
