import { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import useLocation from "../hooks/useLocation";

const MainMapComponent = ({ selectedQuest, setSelectedQuest, data }) => {
  const { latitude, longitude, errorMsg, response } = useLocation();
  const mapRef = useRef(null);
  const markerRefs = useRef({});
  const markerPressedRef = useRef(false); // <-- add this

  useEffect(() => {
    if (selectedQuest && mapRef.current) {
      const quest = data.find((q) => q.id === selectedQuest.id);
      if (quest) {
        mapRef.current.animateToRegion({
          latitude: quest.location[0],
          longitude: quest.location[1],
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
      }
    }
    if (selectedQuest && markerRefs.current[selectedQuest.id]) {
      markerRefs.current[selectedQuest.id].showCallout();
    }
  }, [selectedQuest]);

  const onMarkerPress = (quest) => {
    markerPressedRef.current = true; // mark that marker was pressed
    setSelectedQuest(quest);
  };

  const onMapPress = () => {
    if (markerPressedRef.current) {
      // skip clearing selection, reset flag
      markerPressedRef.current = false;
      return;
    }
    setSelectedQuest(null);
  };

  if (!latitude || !longitude) {
    return (
      <View style={styles.loadingContainer}>
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
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      }}
      // region={{
      //   latitude,
      //   longitude,
      //   latitudeDelta: 0.015,
      //   longitudeDelta: 0.015,
      // }}
      ref={mapRef}
      onPress={onMapPress}
    >
      <Marker
        coordinate={{ latitude, longitude }}
        description="You are here!"
      />

      {data.map((quest) => (
        <Marker
          ref={(ref) => {
            markerRefs.current[quest.id] = ref;
          }}
          key={quest.id}
          coordinate={{
            latitude: quest.location[0],
            longitude: quest.location[1],
          }}
          onPress={() => onMarkerPress(quest)}
          description={quest.title}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    borderRadius: 20,
  },
  map: {
    //height: "65%",
    flex: 1,
  },
});

export default MainMapComponent;
