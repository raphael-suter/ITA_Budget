import registerRootComponent from "expo/build/launch/registerRootComponent";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsTab from "./Tabs/SettingsTab";
import HomeTab from "./Tabs/HomeTab";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { DataContextProvider } from "./Data/Data";

const Tab = createBottomTabNavigator();
const TabOptions = { activeTintColor: "tomato", inactiveTintColor: "gray" };

const HomeTabOptions = {
  title: "Home",
  tabBarIcon: ({ size, color }) => (
    <Ionicons name="home" size={size} color={color} />
  ),
};

const SettingsTabOptions = {
  title: "Settings",
  tabBarIcon: ({ size, color }) => (
    <Ionicons name="settings" size={size} color={color} />
  ),
};

const App = () => (
  <DataContextProvider>
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={TabOptions}>
        <Tab.Screen
          name="HomeTab"
          component={HomeTab}
          options={HomeTabOptions}
        />
        <Tab.Screen
          name="SettingsTab"
          component={SettingsTab}
          options={SettingsTabOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </DataContextProvider>
);

registerRootComponent(App);
