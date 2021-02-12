import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "native-base";
import moment from "moment";

const styles = StyleSheet.create({
  view: { flex: 1 },
  category: { fontWeight: "bold" },
  amount: { fontWeight: "bold", fontSize: 18 },
});

const BudgetListItem = ({ data: { category, amount, comment, date } }) => (
  <ListItem>
    <View style={styles.view}>
      <Text style={styles.category}>{category}</Text>
      <Text>{`${comment}, ${moment(date).format("DD.MM.YYYY")}`}</Text>
    </View>
    <Text style={styles.amount}>{amount.toFixed(2)} CHF</Text>
  </ListItem>
);

export default BudgetListItem;
