import * as React from "react";
import { ScrollView, Text } from "react-native";
import { Left, List, ListItem, Right } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const SettingsScreen = ({ navigation }) => (
  <ScrollView>
    <List>
      <ListItem onPress={() => navigation.navigate("CategoriesScreen")}>
        <Left>
          <Text>Categories</Text>
        </Left>
        <Right>
          <Ionicons name="arrow-forward" color="tomato" size={20} />
        </Right>
      </ListItem>
    </List>
  </ScrollView>
);

export default SettingsScreen;
