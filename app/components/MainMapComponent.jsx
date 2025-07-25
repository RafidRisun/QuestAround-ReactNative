import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const MainMapComponent = () => {
  const [location, setLocation] =
    (useState < Location.LocationObject) | (null > null);
  const [errorMsg, setErrorMsg] = (useState < string) | (null > null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
        {latitude && longitude && <MapView.Marker coordinate={{ location }} />}
      </View>
    );
  }
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
