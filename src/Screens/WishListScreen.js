import React, { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Fab, Icon, List, ListItem } from "native-base";
import { DataContext } from "../Data/Data";

const styles = StyleSheet.create({
  image: { width: "100%", height: 400 },
  fab: { backgroundColor: "tomato" },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: { color: "gray", paddingBottom: 25 },
});

const WishListScreen = ({ navigation }) => {
  const { wishes } = useContext(DataContext);

  const images = wishes.map((uri, index) => (
    <ListItem key={index}>
      <Image source={{ uri }} style={styles.image} />
    </ListItem>
  ));

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {wishes.length > 0 ? (
        <ScrollView>
          <List>{images}</List>
        </ScrollView>
      ) : (
        <View style={styles.view}>
          <Text style={styles.error}>No entries found...</Text>
        </View>
      )}
      <Fab
        style={styles.fab}
        position="bottomRight"
        onPress={() => navigation.navigate("CameraScreen")}
      >
        <Icon name="camera" />
      </Fab>
    </View>
  );
};

export default WishListScreen;
