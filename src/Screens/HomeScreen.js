import React, { useContext, useState } from "react";
import { DataContext } from "../Data/Data";
import { List } from "native-base";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MonthPicker from "../Components/MonthPicker";
import BudgetListItem from "../Components/BudgetListItem";

const styles = StyleSheet.create({
  total: {
    padding: 20,
    textAlign: "right",
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: { color: "gray", paddingBottom: 25 },
});

const HomeScreen = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const { budget } = useContext(DataContext);
  let filteredTotal = 0;

  const filteredBudget = budget
    .filter(({ date }) => new Date(date).getMonth() === month)
    .map((entry, index) => {
      filteredTotal += entry.amount;
      return <BudgetListItem data={entry} key={index} />;
    });

  return (
    <>
      <MonthPicker month={month} setMonth={setMonth} />
      {filteredBudget.length > 0 ? (
        <ScrollView>
          <List>{filteredBudget}</List>
          <Text style={styles.total}>{filteredTotal.toFixed(2)} CHF</Text>
        </ScrollView>
      ) : (
        <View style={styles.view}>
          <Text style={styles.error}>No entries found...</Text>
        </View>
      )}
    </>
  );
};

export default HomeScreen;
