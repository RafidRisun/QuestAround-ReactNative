import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import MainMapComponent from "./components/MainMapComponent";
import QuestListComponent from "./components/QuestListComponent";

export default function Index() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#96c294", "#475c46"]}
        style={styles.background}
      />
      <MainMapComponent />
      <QuestListComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
