import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../Screens/SettingsScreen";
import CategoriesScreen from "../Screens/CategoriesScreen";

const Stack = createStackNavigator();
const SettingsScreenOptions = { title: "Settings" };
const CategoriesScreenOptions = { title: "Categories" };

const SettingsTab = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={SettingsScreenOptions}
    />
    <Stack.Screen
      name="CategoriesScreen"
      component={CategoriesScreen}
      options={CategoriesScreenOptions}
    />
  </Stack.Navigator>
);

export default SettingsTab;
