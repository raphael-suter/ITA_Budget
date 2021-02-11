import React, { useState } from "react";
import moment from "moment";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
    backgroundColor: "tomato",
  },
  text: { flex: 1, textAlign: "center", fontSize: 15, color: "white" },
  button: { padding: 10 },
});

const MonthPicker = ({ month, setMonth }) => {
  const months = moment.months();

  const changeMonth = (step) => {
    const { min, max } = Math;
    setMonth(min(max(month + step, 0), 11));
  };

  return (
    <View style={styles.view}>
      <Button transparent style={styles.button} onPress={() => changeMonth(-1)}>
        <Ionicons name="chevron-back" size={20} color="white" />
      </Button>
      <Text style={styles.text}>{months[month]}</Text>
      <Button transparent style={styles.button} onPress={() => changeMonth(1)}>
        <Ionicons name="chevron-forward" size={20} color="white" />
      </Button>
    </View>
  );
};

export default MonthPicker;
