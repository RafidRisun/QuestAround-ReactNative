import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function QuestDetails() {
  const { id, data } = useLocalSearchParams();
  const quest = data ? JSON.parse(data) : null;
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#96c294", "#506150ff"]}
        style={styles.gradient}
      />
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        {quest.title}
      </Text>
      <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
        Reward: {quest.reward}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 14,
          marginTop: 10,
          textAlign: "justify",
        }}
      >
        {quest.description}
      </Text>

      <View style={styles.userCard}>
        <View style={{ marginRight: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Posted By</Text>
          <Text style={{ fontWeight: "bold" }}>Address</Text>
          <Text style={{ fontWeight: "bold" }}>Phone</Text>
        </View>
        <View>
          <Text>{quest.username}</Text>
          <Text>{quest.address}</Text>
          <Text>{quest.phoneNumber}</Text>
        </View>
      </View>

      <View style={styles.bottomBar}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={{ color: "#506150ff" }}>Back to Quests</Text>
        </Pressable>
        <Pressable style={styles.acceptButton}>
          <Text style={{ color: "white" }}>Accept Quest!</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "60%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
    paddingTop: 35,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomBar: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 70,
  },
  backButton: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
  },
  acceptButton: {
    backgroundColor: "#E84476",
    padding: 15,
    borderRadius: 15,
  },
  userCard: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
