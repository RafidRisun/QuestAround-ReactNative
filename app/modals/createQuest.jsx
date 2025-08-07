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
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
            colors={["#83c193", "#4b6351"]}
            style={styles.gradient}
          />
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={{ flex: 1, paddingVertical: 10, gap: 10 }}>
              <View>
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  Create a new quest
                </Text>
                <Text style={{ color: "white", fontSize: 12 }}>
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
                  placeholder="What would the Reward be?? (Enter amount)"
                  placeholderTextColor="#ccc"
                />
                <Text
                  style={{
                    marginLeft: 8,
                    marginRight: 8,
                    color: "white",
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
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
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
          </TouchableWithoutFeedback>
          <View style={styles.bottomBar}>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
              <Text style={{ color: "#506150ff" }}>Back to Quests</Text>
            </Pressable>
            <Pressable style={styles.PostButton}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Post Quest!
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
    minHeight: "82%",
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
    borderRadius: 10,
  },
  PostButton: {
    backgroundColor: "#E84476",
    padding: 15,
    borderRadius: 10,
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
  },
  dropdownButtonStyle: {
    width: "100%",
    height: 40,
    backgroundColor: "#84aa82ff",
    borderRadius: 12,
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
    backgroundColor: "#84aa82ff",
    borderRadius: 8,
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
