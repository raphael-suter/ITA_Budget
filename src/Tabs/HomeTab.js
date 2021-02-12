import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import CreateScreen from "../Screens/CreateScreen";
import { Button } from "native-base";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const CreateScreenOptions = { title: "Create" };
const styles = StyleSheet.create({ headerButton: { marginRight: 10 } });

const HomeScreenOptions = ({ navigation }) => ({
  title: "Home",
  headerRight: () => (
    <Button
      transparent
      style={styles.headerButton}
      onPress={() => navigation.navigate("CreateScreen")}
    >
      <Ionicons name="add" size={28} />
    </Button>
  ),
});

const HomeTab = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={HomeScreenOptions}
    />
    <Stack.Screen
      name="CreateScreen"
      component={CreateScreen}
      options={CreateScreenOptions}
    />
  </Stack.Navigator>
);

export default HomeTab;
