import React, { createContext, useEffect, useState } from "react";
import { AsyncStorage } from "react-native";

const DataContext = createContext({});

const save = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

const read = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
  }
};

const DataContextProvider = ({ children }) => {
  const [categories, _setCategories] = useState([]);
  const [budget, setBudget] = useState([]);
  const [wishes, setWishes] = useState([]);

  const setCategories = (input) => {
    _setCategories(input);
    save("categories", input);
  };

  const value = {
    categories,
    setCategories,
    budget,
    setBudget,
    wishes,
    setWishes,
  };

  useEffect(() => {
    read("categories").then((data) => {
      _setCategories(data || []);
    });
  }, []);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
