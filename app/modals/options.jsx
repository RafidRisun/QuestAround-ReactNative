import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

const Options = () => {
  const router = useRouter();

  return (
    <>
      <Pressable style={{ flex: 1 }} onPress={() => router.back()}></Pressable>
      <View style={styles.container}>
        <View style={styles.optionCard}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "15%",
    width: "100%",
    position: "absolute",
    top: 20,
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  optionCard: {
    height: "100%",
    width: "100%",
    backgroundColor: "#84aa82ff",
    borderRadius: 20,
  },
});

export default Options;
