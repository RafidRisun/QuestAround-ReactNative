import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

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
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          {quest.title}
        </Text>
        <FontAwesome name={quest.iconName} color="white" size={20} />
      </View>
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
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Posted On:{" "}
          </Text>
          <Text style={{ color: "white" }}>{quest.postedOn.date}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Ends On: </Text>
          <Text style={{ color: "white" }}>{quest.endDate}</Text>
        </View>
      </View>
      <View style={styles.userCard}>
        <Image
          style={styles.image}
          source={require("../../assets/images/image.png")}
          //placeholder={}
          contentFit="cover"
          transition={1000}
        />
        <View>
          <Text
            style={{ fontWeight: "bold", color: "#506150ff", fontSize: 12 }}
          >
            Posted By:
          </Text>
          <Text style={{ fontWeight: "bold", color: "#506150ff" }}>
            {quest.username}
          </Text>
          <Text style={{ color: "#506150ff" }}>{quest.address}</Text>
        </View>
      </View>
      <View style={styles.commentCard}>
        <Text
          style={{
            color: "#506150ff",
            fontWeight: "bold",
          }}
        >
          Comments
        </Text>
        <View
          style={{
            borderBottomColor: "#506150ff",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <FlatList
          data={quest.comments}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "bold", color: "#506150ff" }}>
                {item.username}:
              </Text>
              <Text style={{ color: "#506150ff" }}>{item.text}</Text>
            </View>
          )}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Write a comment or Ask a question!"
        placeholderTextColor="#475C46"
      />

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
    height: "63%",
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
    paddingTop: 25,
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
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#84aa82ff",
    backgroundColor: "#96c294",
  },
  commentCard: {
    backgroundColor: "white",
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 10,
    height: 140,
    paddingBottom: 0,
  },
  input: {
    backgroundColor: "white",
    color: "black",
    padding: 8,
    paddingLeft: 20,
    borderColor: "#475C46",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 0,
    height: 40,
    width: "100%",
  },
});
