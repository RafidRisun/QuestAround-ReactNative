import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TallBackSVG from "../../assets/svg/tallBack2.svg";

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
    <View style={{ flex: 1 }}>
      <Pressable style={{ flex: 1 }} onPress={() => router.back()} />
      <View
        style={{
          width: "100%",
          minHeight: "20%",
          backgroundColor: "#f2efe8",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "100%",
            padding: 2,
          }}
        >
          <TallBackSVG
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMin meet"
            style={{}}
          />
        </View>
        <View
          style={{
            height: "auto",
            paddingHorizontal: 50,
            paddingTop: 75,
            paddingBottom: 15,
            gap: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ color: "#042944", fontSize: 20, fontWeight: "bold" }}
            >
              {quest.title}
            </Text>
            <FontAwesome name={quest.iconName} color="#042944" size={20} />
          </View>
          <Text style={{ color: "#042944", fontSize: 12, fontWeight: "bold" }}>
            Reward: {quest.reward}
          </Text>
          <Text
            style={{
              color: "#042944",
              fontSize: 14,
              textAlign: "justify",
            }}
          >
            {quest.description}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ color: "#042944", fontWeight: "bold" }}>
                Posted On:{" "}
              </Text>
              <Text style={{ color: "#042944" }}>{quest.postedOn.date}</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ color: "#042944", fontWeight: "bold" }}>
                Ends On:{" "}
              </Text>
              <Text style={{ color: "#042944" }}>{quest.endDate}</Text>
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
                  color: "#f2efe8",
                  fontSize: 12,
                }}
              >
                Quest Posted by:
              </Text>
              <Text style={{ fontWeight: "bold", color: "#f2efe8" }}>
                {quest.username}
              </Text>
              <Text style={{ color: "#f2efe8" }}>{quest.address}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomBar}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={{ color: "#042944" }}>Back to Quests</Text>
          </Pressable>
          <Pressable style={styles.acceptButton}>
            <Text style={{ color: "#ee906f", fontWeight: "bold" }}>
              Accept Quest!
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bottomBar: {
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 60,
    marginTop: 15,
  },
  backButton: {
    flexShrink: 1,
    padding: 10,
    backgroundColor: "#ee906f",
    borderBottomWidth: 4,
    borderColor: "#042944",
    borderRadius: 3,
  },
  acceptButton: {
    flexShrink: 1,
    padding: 10,
    backgroundColor: "#042944",
    borderBottomWidth: 4,
    borderColor: "#ee906f",
    borderRadius: 3,
  },
  userCard: {
    flexDirection: "row",
    backgroundColor: "#042944",
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#f2efe8",
    backgroundColor: "#f2efe8",
  },
  commentCard: {
    backgroundColor: "#042944",
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 10,
    //flex: 1, // <-- allow FlatList to expand and scroll
    paddingBottom: 0,
    minHeight: 100,
  },
  input: {
    backgroundColor: "#84aa82ff",
    color: "#042944",
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
