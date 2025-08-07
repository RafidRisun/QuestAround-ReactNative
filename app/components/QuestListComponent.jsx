import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const QuestListComponent = ({ selectedQuest, setSelectedQuest, data }) => {
  const questListRef = useRef(null);
  const router = useRouter();
  //data = null;
  const onQuestPress = (quest) => {
    setSelectedQuest(quest);
    if (questListRef.current) {
      questListRef.current.scrollToIndex({
        index: data.findIndex((q) => q.id === quest.id),
        animated: true,
      });
    }
  };

  useEffect(() => {
    if (selectedQuest && questListRef.current) {
      const index = data.findIndex((q) => q.id === selectedQuest.id);
      if (index !== -1) {
        questListRef.current.scrollToIndex({ index, animated: true });
      }
    }
  }, [selectedQuest]);

  if (!data || data.length === 0) {
    return (
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#96c294", "#506150ff"]}
          style={styles.gradient}
        />
        <Text style={{ color: "white", fontSize: "16", fontWeight: "bold" }}>
          No quests available
        </Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#83c193", "#4b6351"]}
          style={styles.gradient}
        />
        <TextInput
          style={styles.input}
          placeholder="Search for Quests..."
          placeholderTextColor="#475C46"
        />
        <Text
          style={{
            color: "white",
            paddingLeft: 10,
            margin: 6,
            fontWeight: "bold",
          }}
        >
          Quests Nearby!
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 80 }}
          ref={questListRef}
          renderItem={({ item }) => (
            <Pressable
              style={
                item.id === selectedQuest?.id
                  ? styles.listSelected
                  : styles.list
              }
              onPress={() => onQuestPress(item)}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <FontAwesome
                  name={item.iconName}
                  color={item.id === selectedQuest?.id ? "#506150ff" : "white"}
                  size={14}
                />
                <View>
                  <Text
                    style={
                      item.id === selectedQuest?.id
                        ? { color: "#506150ff", fontWeight: "bold" }
                        : { color: "white", fontWeight: "bold" }
                    }
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={
                      item.id === selectedQuest?.id
                        ? { color: "#506150ff", fontSize: 10 }
                        : { color: "white", fontSize: 10 }
                    }
                  >
                    Reward: {item.reward}
                  </Text>
                </View>
              </View>
              {item.type === "event" && (
                <Text
                  style={{
                    color: "#506150ff",
                    fontSize: 8,
                    backgroundColor: "white",
                    padding: 3,
                    borderRadius: 5,
                  }}
                >
                  Event
                </Text>
              )}
            </Pressable>
          )}
        />
        <View
          style={selectedQuest ? styles.bottomBarSelected : styles.bottomBar}
        >
          <Pressable
            style={
              selectedQuest ? styles.postButtonSelected : styles.postButton
            }
            onPress={() => {
              router.navigate({
                pathname: "/modals/createQuest",
              });
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Post a Quest!
            </Text>
          </Pressable>
          <Pressable
            style={
              selectedQuest
                ? styles.unselectbuttonSelected
                : styles.unselectbutton
            }
            onPress={() => {
              setSelectedQuest(null);
            }}
          >
            <Text style={{ color: "#475C46" }}>Unselect</Text>
          </Pressable>
          <Pressable
            style={
              selectedQuest
                ? styles.goToQuestbuttonSelected
                : styles.goToQuestbutton
            }
            onPress={() => {
              router.navigate({
                pathname: "/modals/questDetails",
                params: {
                  //id: selectedQuest.id,
                  data: JSON.stringify(
                    data.find((q) => q.id === selectedQuest.id)
                  ),
                },
              });
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Go to Quest!
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    //position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    padding: 20,
    paddingTop: 35,
    //height: "45%",
    flex: 1,
    boxSizing: "border-box",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    elevation: 5,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  input: {
    backgroundColor: "white",
    color: "black",
    padding: 8,
    paddingLeft: 20,
    borderWidth: 0.5,
    borderColor: "#475C46",
    borderRadius: 15,
    marginBottom: 0,
    height: 40,
    width: "100%",
  },
  list: {
    padding: 10,
    paddingLeft: 20,
    borderRadius: 10,
    marginVertical: 4,
    backgroundColor: "#72aa82",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
  },
  listSelected: {
    padding: 10,
    paddingLeft: 20,
    borderRadius: 10,
    marginVertical: 4,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
  },
  bottomBar: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 70,
  },
  bottomBarSelected: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 70,
  },
  postButton: {
    backgroundColor: "#83c193",
    padding: 15,
    borderRadius: 10,
  },
  postButtonSelected: {
    backgroundColor: "#83c193",
    padding: 15,
    borderRadius: 10,
    display: "none",
  },
  goToQuestbutton: {
    backgroundColor: "#E84476",
    padding: 15,
    borderRadius: 10,
    display: "none",
  },
  goToQuestbuttonSelected: {
    backgroundColor: "#E84476",
    padding: 15,
    borderRadius: 10,
  },
  unselectbutton: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    display: "none",
  },
  unselectbuttonSelected: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
});

export default QuestListComponent;
