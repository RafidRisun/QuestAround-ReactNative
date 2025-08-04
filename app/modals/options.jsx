import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Options = () => {
  const router = useRouter();

  return (
    <Pressable
      style={{ flex: 1, padding: 20, paddingTop: 50 }}
      onPress={() => router.back()}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Options</Text>
        <Pressable
          onPress={() => {
            console.log("Pressed");
          }}
        >
          <Text>Press Me</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "30%",
    width: "100%",
    backgroundColor: "#84aa82ff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Options;
