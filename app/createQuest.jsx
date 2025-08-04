import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function CreateQuest() {
  const router = useRouter();
  const animatedMargin = useRef(new Animated.Value(0)).current;
  const [date, setDate] = useState(new Date());

  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
  };

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", (e) => {
      const kbHeight = (e.endCoordinates?.height || 330) - 200;
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
          colors={["#96c294", "#506150ff"]}
          style={styles.gradient}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{ flex: 1, paddingVertical: 10, gap: 10 }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Create a new quest
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter quest title"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Enter quest description"
              placeholderTextColor="#ccc"
              multiline={true}
              numberOfLines={4}
              textAlignVertical="top"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter quest reward"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter quest address"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter phone number"
              placeholderTextColor="#ccc"
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 10,
                marginBottom: 0,
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 14 }}
              >
                Select End Date:
              </Text>
              <DateTimePicker
                value={date}
                mode={"date"}
                is24Hour={true}
                onChange={onChange}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 10,
                marginTop: 0,
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 14 }}
              >
                Select End Time:
              </Text>
              <DateTimePicker
                value={date}
                mode={"time"}
                is24Hour={true}
                onChange={onChange}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                marginTop: 0,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <BouncyCheckbox
                  size={20}
                  disableText
                  fillColor="#E84476"
                  unFillColor="#FFFFFF"
                  iconStyle={{ borderColor: "#E84476" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={(isChecked) => {}}
                />
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 14 }}
                >
                  Group Event
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <BouncyCheckbox
                  size={20}
                  disableText
                  fillColor="#E84476"
                  unFillColor="#FFFFFF"
                  iconStyle={{ borderColor: "#E84476" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={(isChecked) => {}}
                />
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 14 }}
                >
                  Female Only
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.bottomBar}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={{ color: "#506150ff" }}>Back to Quests</Text>
          </Pressable>
          <Pressable style={styles.PostButton}>
            <Text style={{ color: "white" }}>Post Quest!</Text>
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "80%",
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
    marginTop: 15,
  },
  backButton: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
  },
  PostButton: {
    backgroundColor: "#E84476",
    padding: 15,
    borderRadius: 15,
  },
  input: {
    backgroundColor: "white",
    color: "black",
    padding: 8,
    paddingLeft: 20,
    borderWidth: 0.5,
    borderColor: "#475C46",
    borderRadius: 10,
    marginBottom: 0,
    height: 40,
    width: "100%",
    //marginVertical: 20,
  },
});
