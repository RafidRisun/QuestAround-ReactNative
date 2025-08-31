import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Options = () => {
  const router = useRouter();

  return (
    <>
      <Pressable style={{ flex: 1 }} onPress={() => router.back()}></Pressable>
      <View style={styles.container}>
        <View style={styles.optionCard}>
          <Pressable
            style={styles.optionList}
            onPress={() => router.push("../profile")}
          >
            <FontAwesome name="user" size={24} color="#042944" />
            <Text style={{ color: "#042944", fontSize: 12 }}>Profile</Text>
          </Pressable>
          <Pressable
            style={styles.optionList}
            onPress={() => router.push("/settings")}
          >
            <FontAwesome name="gear" size={24} color="#042944" />
            <Text style={{ color: "#042944", fontSize: 12 }}>Settings</Text>
          </Pressable>
          <Pressable
            style={styles.optionList}
            onPress={() => router.push("/specialEvent")}
          >
            <FontAwesome name="star" size={24} color="#042944" />
            <Text style={{ color: "#042944", fontSize: 12 }}>
              Special Event
            </Text>
          </Pressable>
          <Pressable
            style={styles.optionList}
            onPress={() => router.push("/ongoingQuest")}
          >
            <FontAwesome name="bars-progress" size={24} color="#042944" />
            <Text style={{ color: "#042944", fontSize: 12 }}>
              On Going Quest
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    width: "100%",
    position: "absolute",
    top: 65,
    left: 0,
    padding: 20,
  },
  optionCard: {
    flex: 1,
    backgroundColor: "#f2efe8",
    borderColor: "#ee906f",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    gap: 10,
  },
  optionList: {
    padding: 10,
    paddingLeft: 20,
    borderRadius: 3,
    backgroundColor: "#ee916fff",
    borderBottomWidth: 3,
    borderBottomColor: "#042944",
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: "center",
    gap: 10,
  },
});

export default Options;
