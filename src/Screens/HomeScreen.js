import React, { useContext, useState } from "react";
import { Text } from "react-native";
import { DataContext } from "../Data/Data";
import { List, ListItem } from "native-base";
import MonthPicker from "../Components/MonthPicker";
import moment from "moment";

const HomeScreen = () => {
  const { budget, setBudget } = useContext(DataContext);
  const [month, setMonth] = useState(moment().format("M") - 1);

  return (
    <>
      <MonthPicker month={month} setMonth={setMonth} />
      <List>
        {budget.map((item, index) => (
          <ListItem key={index}>
            <Text>{item}</Text>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default HomeScreen;
