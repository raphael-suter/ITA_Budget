import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WishListScreen from "../Screens/WishListScreen";
import CameraScreen from "../Screens/CameraScreen";

const Stack = createStackNavigator();
const WishListScreenOptions = { title: "Wish list" };
const CameraScreenOptions = { title: "Camera" };

const SettingsTab = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="WishListScreen"
      component={WishListScreen}
      options={WishListScreenOptions}
    />
    <Stack.Screen
      name="CameraScreen"
      component={CameraScreen}
      options={CameraScreenOptions}
    />
  </Stack.Navigator>
);

export default SettingsTab;
