import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const MainMapComponent = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "70%",
    borderRadius: 20,
  },
  map: {
    flex: 1,
  },
});

export default MainMapComponent;
