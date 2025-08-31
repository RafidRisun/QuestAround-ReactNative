import DateTimePicker from "@react-native-community/datetimepicker";
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
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TallBackSVG from "../../assets/svg/tallBack2.svg";

export default function CreateQuest() {
  const router = useRouter();
  const animatedMargin = useRef(new Animated.Value(0)).current;
  const [date, setDate] = useState(new Date());

  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
  };

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", (e) => {
      const kbHeight = (e.endCoordinates?.height || 330) - 250;
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

  const questIconData = Object.keys(questIcon).map((key) => ({
    title: key,
    icon: questIcon[key],
  }));

  const questIconColorData = Object.keys(questIconColor).map((key) => ({
    title: key,
    color: questIconColor[key],
  }));

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        <Pressable style={{ flex: 1 }} onPress={() => router.back()} />
        <Animated.View
          style={{
            width: "100%",
            minHeight: "20%",
            backgroundColor: "#f2efe8",
            borderWidth: 2,
            borderColor: "#ee906f",
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
              paddingHorizontal: 45,
              paddingTop: 75,
              paddingBottom: 15,
              gap: 5,
            }}
          >
            <View>
              <Text
                style={{ color: "#042944", fontSize: 20, fontWeight: "bold" }}
              >
                Create a new quest
              </Text>
              <Text style={{ color: "#042944", fontSize: 12 }}>
                (Quest location will be set to your current location)
              </Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Give your Quest a Title!"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Describe your Quest a bit:)"
              placeholderTextColor="#ccc"
              multiline={true}
              numberOfLines={4}
              textAlignVertical="top"
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                style={[styles.input, { flex: 1 }]} // Make the TextInput take up available space
                keyboardType="numeric"
                placeholder="What would the Reward be??"
                placeholderTextColor="#ccc"
              />
              <Text
                style={{
                  marginLeft: 8,
                  marginRight: 8,
                  color: "#042944",
                  fontWeight: "bold",
                }}
              >
                Taka
              </Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Let them know your Address"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.input}
              placeholder="Can we get your Phone Number?:)"
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
                style={{ color: "#042944", fontWeight: "bold", fontSize: 14 }}
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
                style={{ color: "#042944", fontWeight: "bold", fontSize: 14 }}
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
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <BouncyCheckbox
                  size={20}
                  disableText
                  fillColor="#eb6650"
                  unFillColor="#FFFFFF"
                  iconStyle={{ borderColor: "#eb6650" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={(isChecked) => {}}
                />
                <Text
                  style={{ color: "#042944", fontWeight: "bold", fontSize: 14 }}
                >
                  Group Event
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {/* Only for female users */}
                <BouncyCheckbox
                  size={20}
                  disableText
                  fillColor="#eb6650"
                  unFillColor="#FFFFFF"
                  iconStyle={{ borderColor: "#eb6650" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={(isChecked) => {}}
                />
                <Text
                  style={{ color: "#042944", fontWeight: "bold", fontSize: 14 }}
                >
                  Female Only
                </Text>
              </View>
            </View>
            <SelectDropdown
              data={questIconData}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={styles.dropdownButtonStyle}>
                    {selectedItem && (
                      <Icon
                        name={selectedItem.icon}
                        style={styles.dropdownButtonIconStyle}
                      />
                    )}
                    <Text style={styles.dropdownButtonTxtStyle}>
                      {(selectedItem && selectedItem.title) ||
                        "Select quest icon"}
                    </Text>
                    <Icon
                      name={isOpened ? "chevron-up" : "chevron-down"}
                      style={styles.dropdownButtonArrowStyle}
                    />
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View
                    style={{
                      ...styles.dropdownItemStyle,
                      ...(isSelected && { backgroundColor: "#D2D9DF" }),
                    }}
                  >
                    <Icon
                      name={item.icon}
                      style={styles.dropdownItemIconStyle}
                    />
                    <Text style={styles.dropdownItemTxtStyle}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
            />
            <SelectDropdown
              data={questIconColorData}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={styles.dropdownButtonStyle}>
                    <Text
                      style={[
                        styles.dropdownButtonTxtStyle,
                        {
                          color: selectedItem ? selectedItem.color : "white",
                        },
                      ]}
                    >
                      {(selectedItem && selectedItem.title) ||
                        "Select quest color"}
                    </Text>
                    <Icon
                      name={isOpened ? "chevron-up" : "chevron-down"}
                      style={styles.dropdownButtonArrowStyle}
                    />
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View
                    style={{
                      ...styles.dropdownItemStyle,
                      ...(isSelected && { backgroundColor: "#D2D9DF" }),
                    }}
                  >
                    <Text
                      style={[
                        styles.dropdownItemTxtStyle,
                        { color: item.color },
                      ]}
                    >
                      {item.title}
                    </Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
            />
          </View>
          <View style={styles.bottomBar}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
              <Text style={{ color: "#042944" }}>Back to Quests</Text>
            </Pressable>
            <Pressable style={styles.postButton}>
              <Text style={{ color: "#ee906f", fontWeight: "bold" }}>
                Post Quest!
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
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
  postButton: {
    flexShrink: 1,
    padding: 10,
    backgroundColor: "#042944",
    borderBottomWidth: 4,
    borderColor: "#ee906f",
    borderRadius: 3,
  },
  input: {
    backgroundColor: "white",
    color: "black",
    padding: 8,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: "#ee906f",
    borderRadius: 5,
    height: 40,
    width: "100%",
  },
  dropdownButtonStyle: {
    width: "100%",
    height: 40,
    backgroundColor: "#ee906f",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    marginTop: 10,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    color: "white",
  },
  dropdownButtonArrowStyle: {
    fontSize: 22,
    color: "white",
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
    color: "white",
  },
  dropdownMenuStyle: {
    backgroundColor: "#ec754aff",
    borderRadius: 7,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
    color: "white",
  },
});

const questIcon = {
  Nature: "leaf",
  Study: "book",
  "Animals and Pets": "paw",
  Shopping: "shopping-cart",
  Farming: "seedling",
  Cooking: "kitchen-set",
  Star: "star",
  Paint: "paint-brush",
  Hammer: "hammer",
};

const questIconColor = {
  blue: "#3D74B6",
  yellow: "#FFCB61",
  orange: "#FF894F",
  red: "#EA5B6F",
  green: "#4A9782",
};
