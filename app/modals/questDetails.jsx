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
import TallBackSVG from "../../assets/svg/whiteFrame.svg";

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
          backgroundColor: "#ee906f",
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
        <View style={styles.bottomBar}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={{ color: "#042944" }}>Back to Quests</Text>
          </Pressable>
          <Pressable style={styles.acceptButton}>
            <Text style={{ color: "#f2e8b7", fontWeight: "bold" }}>
              Accept Quest!
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  // container: {
  //   minHeight: "65%",
  //   //flexShrink: 1,
  //   left: 0,
  //   right: 0,
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: -2 },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 5,
  //   elevation: 5,
  //   padding: 20,
  //   paddingTop: 25,
  // },
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
    backgroundColor: "#f2efe8",
    borderWidth: 4,
    borderColor: "#042944",
    borderRadius: 5,
  },
  acceptButton: {
    flexShrink: 1,
    padding: 10,
    backgroundColor: "#042944",
    borderWidth: 4,
    borderColor: "#f2efe8",
    borderRadius: 5,
  },
  userCard: {
    flexDirection: "row",
    backgroundColor: "white",
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
    borderColor: "#84aa82ff",
    backgroundColor: "#96c294",
  },
  commentCard: {
    backgroundColor: "white",
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
