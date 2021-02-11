import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import CreateScreen from "../Screens/CreateScreen";

const Stack = createStackNavigator();
const HomeScreenOptions = { title: "Home" };
const CreateScreenOptions = { title: "Create" };

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
