import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { DataContext } from "../Data/Data";

const styles = StyleSheet.create({
  panel: { flex: 1, justifyContent: "center" },
  error: { margin: 20 },
  overlay: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

const CameraScreen = ({ navigation }) => {
  let camera = null;
  const { width } = Dimensions.get("window");
  const { wishes, setWishes } = useContext(DataContext);
  const [hasPermission, setHasPermission] = useState(null);

  const takePicture = async () => {
    if (camera) {
      const { uri } = await camera.takePictureAsync();

      setWishes([...wishes, uri]);
      navigation.navigate("WishListScreen");
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null || hasPermission === false) {
    return <Text style={styles.error}>No access to camera</Text>;
  }

  return (
    <View style={styles.panel}>
      <Camera
        style={{ height: (width / 3) * 4 }}
        ratio="3:4"
        ref={(r) => {
          camera = r;
        }}
      >
        <View style={styles.overlay}>
          <TouchableOpacity onPress={takePicture}>
            <Ionicons name="radio-button-on-outline" color="white" size={80} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
