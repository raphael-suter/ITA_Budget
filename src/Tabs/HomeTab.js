import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import CreateScreen from "../Screens/CreateScreen";
import { Button } from "native-base";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ChartScreen from "../Screens/ChartScreen";

const styles = StyleSheet.create({
  headerButton: { marginRight: 15 },
  buttonBar: { marginRight: 10, flexDirection: "row" },
});

const Stack = createStackNavigator();
const CreateScreenOptions = { title: "Create" };
const ChartScreenOptions = { title: "Charts" };

const HomeScreenOptions = ({ navigation }) => ({
  title: "Home",
  headerRight: () => (
    <View style={styles.buttonBar}>
      <Button
        transparent
        style={styles.headerButton}
        onPress={() => navigation.navigate("ChartScreen")}
      >
        <Ionicons name="stats-chart" size={20} />
      </Button>
      <Button transparent onPress={() => navigation.navigate("CreateScreen")}>
        <Ionicons name="add" size={28} />
      </Button>
    </View>
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
    <Stack.Screen
      name="ChartScreen"
      component={ChartScreen}
      options={ChartScreenOptions}
    />
  </Stack.Navigator>
);

export default HomeTab;
