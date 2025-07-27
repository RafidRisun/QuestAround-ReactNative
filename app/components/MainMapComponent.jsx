import { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import useLocation from "../hooks/useLocation";

const MainMapComponent = ({ selectedQuestID, setSelectedQuest }) => {
  const { latitude, longitude, response } = useLocation();
  const mapRef = useRef(null);

  useEffect(() => {
    if (selectedQuestID && mapRef.current) {
      const quest = data.find((q) => q.id === selectedQuestID);
      if (quest) {
        mapRef.current.animateToRegion({
          latitude: quest.location[0],
          longitude: quest.location[1],
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
      }
    }
  }, [selectedQuestID]);

  const onMarkerPress = (quest) => {
    setSelectedQuest(quest.id);
  };

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
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      }}
      region={{
        latitude,
        longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      }}
      ref={mapRef}
    >
      <Marker coordinate={{ latitude, longitude }} />

      {data.map((quest) => (
        <Marker
          key={quest.id}
          coordinate={{
            latitude: quest.location[0],
            longitude: quest.location[1],
          }}
          onPress={() => onMarkerPress(quest)}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
  },
  map: {
    //flex: 1,
    height: "70%",
  },
});

export default MainMapComponent;

const data = [
  {
    id: 1,
    title: "Quest 1",
    description: "Help me clean up the park!",
    reward: "100 Taka",
    location: [23.749907, 90.41976],
    iconName: "leaf", // cleaning, environment
  },
  {
    id: 2,
    title: "Quest 2",
    description: "Help me with my homework!",
    reward: "200 Taka",
    location: [23.749023, 90.422419],
    iconName: "book", // homework
  },
  {
    id: 3,
    title: "Quest 3",
    description: "Help me find my lost dog!",
    reward: "50 Taka",
    location: [23.75, 90.42],
    iconName: "paw", // dog
  },
  {
    id: 4,
    title: "Quest 4",
    description: "Help me with my shopping!",
    reward: "100 Taka",
    location: [23.748, 90.421],
    iconName: "shopping-cart", // shopping
  },
  {
    id: 5,
    title: "Quest 5",
    description: "Help me with my garden!",
    reward: "150 Taka",
    location: [23.747, 90.42],
    iconName: "seedling", // garden
  },
  {
    id: 6,
    title: "Quest 6",
    description: "Help me with my cooking!",
    reward: "80 Taka",
    location: [23.746, 90.419],
    iconName: "kitchen-set", // cooking
  },
];
