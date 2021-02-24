import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { DataContext } from "../Data/Data";
import { Picker, StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import { Button } from "native-base";
import * as Location from "expo-location";

const styles = StyleSheet.create({
  headerButton: { marginRight: 15 },
  picker: { marginLeft: 10, marginTop: 2 },
  wrapper: {
    display: "flex",
    paddingRight: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: { flex: 1, marginVertical: 8, marginHorizontal: 18, fontSize: 16 },
});

const CreateScreen = ({ navigation }) => {
  const { categories, budget, setBudget } = useContext(DataContext);
  const [category, setCategory] = useState(categories[0] || "");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState(moment().format("DD.MM.YYYY"));
  const [location, setLocation] = useState(null);

  const formatAmount = () => {
    if (amount.trim() !== "") {
      setAmount(Number.parseFloat(amount).toFixed(2).concat(" CHF"));
    }
  };

  const onSave = () => {
    const isNotEmpty = (input) => input && input.trim() !== "";

    if (
      isNotEmpty(category) &&
      isNotEmpty(amount) &&
      isNotEmpty(comment) &&
      isNotEmpty(date)
    ) {
      const {
        coords: { latitude, longitude },
      } = location;

      setBudget([
        ...budget,
        {
          category,
          amount: Number.parseFloat(amount),
          comment,
          date: moment(date, "DD.MM.YYYY").toDate(),
          location: { latitude, longitude },
        },
      ]);

      navigation.navigate("HomeScreen");
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button transparent style={styles.headerButton} onPress={onSave}>
          <Ionicons name="save" size={24} />
        </Button>
      ),
    });
  }, [category, amount, comment, date]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        alert("Permission to access location was denied.");
        setLocation({ latitude: 0, longitude: 0 });

        return;
      }

      setLocation(await Location.getCurrentPositionAsync({}));
    })();
  }, []);

  const categoriesList = categories.map((entry, index) => (
    <Picker.Item label={entry} value={entry} key={index} />
  ));

  return (
    <View>
      <Picker
        mode="dropdown"
        style={styles.picker}
        selectedValue={category}
        onValueChange={setCategory}
      >
        {categoriesList}
      </Picker>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
          onBlur={formatAmount}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <Ionicons name="cash-outline" size={22} color="tomato" />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Comment"
          value={comment}
          onChangeText={setComment}
          style={styles.textInput}
        />
        <Ionicons name="chatbox-outline" size={22} color="tomato" />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Date"
          value={date}
          onChangeText={setDate}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <Ionicons name="calendar-outline" size={22} color="tomato" />
      </View>
    </View>
  );
};

export default CreateScreen;
