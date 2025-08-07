import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function QuestDetails() {
  const { data } = useLocalSearchParams();
  const quest = data ? JSON.parse(data) : null;
  const router = useRouter();

  //const [keyboardOpen, setKeyboardOpen] = useState(false);
  const animatedMargin = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", (e) => {
      const kbHeight = e.endCoordinates?.height || 330;
      Animated.timing(animatedMargin, {
        toValue: kbHeight,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      Animated.timing(animatedMargin, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start();
    });
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <>
      <Pressable style={{ flex: 1 }} onPress={() => router.back()}></Pressable>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "50%",
            backgroundColor: "#50615067",
          }}
        />
        <Animated.View
          style={[styles.container, { marginBottom: animatedMargin }]}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={["#83c193", "#4b6351"]}
            style={styles.gradient}
          />
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  {quest.title}
                </Text>
                <FontAwesome name={quest.iconName} color="white" size={20} />
              </View>
              <Text
                style={{ color: "white", fontSize: 12, fontWeight: "bold" }}
              >
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
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Ends On:{" "}
                  </Text>
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
                    style={{
                      fontWeight: "bold",
                      color: "#506150ff",
                      fontSize: 12,
                    }}
                  >
                    Quest Posted by:
                  </Text>
                  <Text style={{ fontWeight: "bold", color: "#506150ff" }}>
                    {quest.username}
                  </Text>
                  <Text style={{ color: "#506150ff" }}>{quest.address}</Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>

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
                <View style={{ marginVertical: 5 }}>
                  <Text style={{ color: "#506150ff" }}>{item.text}</Text>
                  <Text style={{ fontWeight: "bold", color: "#506150ff" }}>
                    -{item.username}
                  </Text>
                </View>
              )}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#84aa82ff",
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              marginBottom: 0,
              height: 40,
              width: "100%",
            }}
          >
            <TextInput
              style={[
                styles.input,
                {
                  flex: 1,
                  marginBottom: 0,
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 0,
                },
              ]}
              placeholder="Write a comment or Ask a question!"
              placeholderTextColor="#475C46"
            />
            <Pressable
              onPress={() => {
                /* handle comment submit here */
              }}
            >
              <FontAwesome
                name="arrow-right"
                size={20}
                color="white"
                style={{ marginRight: 15 }}
              />
            </Pressable>
          </View>

          <View style={styles.bottomBar}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
              <Text style={{ color: "#506150ff" }}>Back to Quests</Text>
            </Pressable>
            <Pressable style={styles.acceptButton}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Accept Quest!
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    minHeight: "65%",
    //flexShrink: 1,
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
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
    marginTop: 20,
  },
  backButton: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  acceptButton: {
    backgroundColor: "#E84476",
    padding: 15,
    borderRadius: 10,
  },
  userCard: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
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
    flex: 1, // <-- allow FlatList to expand and scroll
    paddingBottom: 0,
  },
  input: {
    backgroundColor: "#84aa82ff",
    color: "white",
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
