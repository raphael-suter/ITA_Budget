import React, { createContext, useState } from "react";

const DataContext = createContext({});

const DataContextProvider = ({ children }) => {
  const [budget, setBudget] = useState([
    {
      category: "Lebensmittel",
      amount: 20.75,
      comment: "Alnatura",
      date: new Date("2021-02-23"),
    },
    {
      category: "Körperpflege",
      amount: 15.2,
      comment: "Bare Ware",
      date: new Date("2021-02-04"),
    },
  ]);

  const value = { budget, setBudget };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
