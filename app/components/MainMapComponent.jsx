import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import useLocation from "../hooks/useLocation";

const MainMapComponent = () => {
  const { latitude, longitude, response } = useLocation();

  if (!latitude || !longitude) {
    return (
      <View style={styles.container}>
        <Text>Loading Map :D</Text>
      </View>
    );
  }
  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={{ latitude, longitude }} />
    </MapView>
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
