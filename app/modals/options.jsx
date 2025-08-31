import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Options = () => {
  const router = useRouter();

  return (
    <>
      <Pressable style={{ flex: 1 }} onPress={() => router.back()}></Pressable>
      <View style={styles.container}>
        <View style={styles.optionCard}>
          <View>
            <Image
              source={require("../../assets/images/image.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
            />
          </View>
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
            onPress={() => router.push("/questHistory")}
          >
            <FontAwesome name="clock-rotate-left" size={24} color="#042944" />
            <Text style={{ color: "#042944", fontSize: 12 }}>
              Quest History
            </Text>
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
    padding: 20,
    gap: 10,
  },
  optionList: {
    padding: 10,
    paddingLeft: 20,
    borderRadius: 3,
    backgroundColor: "#ee916f34",
    // borderBottomWidth: 2,
    // borderBottomColor: "#042944",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default Options;
