import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "native-base";
import moment from "moment";
import MapView, { Marker } from "react-native-maps";

const styles = StyleSheet.create({
  listItem: { flexWrap: "wrap", alignItems: "flex-start", paddingBottom: 18 },
  view: { flex: 1 },
  category: { fontWeight: "bold" },
  amount: { fontWeight: "bold", fontSize: 18 },
  map: {
    width: "100%",
    height: 150,
    marginTop: 10,
  },
});

const BudgetListItem = ({
  data: { category, amount, comment, date, location },
}) => {
  const { latitude, longitude } = location;

  return (
    <ListItem style={styles.listItem}>
      <View style={styles.view}>
        <Text style={styles.category}>{category}</Text>
        <Text>{`${comment}, ${moment(date).format("DD.MM.YYYY")}`}</Text>
      </View>
      <Text style={styles.amount}>{amount.toFixed(2)} CHF</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}
      >
        <Marker coordinate={location} />
      </MapView>
    </ListItem>
  );
};

export default BudgetListItem;
