import React, { useContext, useState } from "react";
import { DataContext } from "../Data/Data";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button, List, ListItem } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    paddingRight: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginVertical: 13,
    marginHorizontal: 18,
    fontSize: 16,
  },
  button: {
    width: 70,
    height: 40,
    marginVertical: 20,
    alignSelf: "center",
    backgroundColor: "tomato",
    justifyContent: "center",
  },
});

const CategoriesScreen = ({ navigation }) => {
  const { categories, setCategories } = useContext(DataContext);
  const [category, setCategory] = useState("");

  const onSave = () => {
    if (category && category.trim() !== "") {
      setCategories([...categories, category]);
      setCategory("");
    }
  };

  const categoriesList = categories.map((entry, index) => (
    <ListItem key={index}>
      <Text>{entry}</Text>
    </ListItem>
  ));

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
          style={styles.textInput}
        />
        <Ionicons name="pencil" size={22} color="tomato" />
      </View>
      <Button rounded style={styles.button} onPress={onSave}>
        <Ionicons name="add" size={22} color="white" />
      </Button>
      <List>{categoriesList}</List>
    </ScrollView>
  );
};

export default CategoriesScreen;
