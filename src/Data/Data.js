import React, { createContext, useState } from "react";

const DataContext = createContext({});

const DataContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    "Lebensmittel",
    "Körperpflege",
  ]);

  const [budget, setBudget] = useState([]);
  const [wishes, setWishes] = useState([]);

  const value = {
    categories,
    setCategories,
    budget,
    setBudget,
    wishes,
    setWishes,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
