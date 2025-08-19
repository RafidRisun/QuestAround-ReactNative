import { FontAwesome } from "@expo/vector-icons";
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
import BackgroundSVG from "../../assets/svg/fullBack2.svg";

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
        <View style={styles.svgBackground}>
          <BackgroundSVG
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice" // maintain aspect ratio, cover parent
          />
        </View>
        <Text style={{ color: "white", fontSize: "16", fontWeight: "bold" }}>
          No quests available
        </Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.svgBackground}>
          <BackgroundSVG
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMin slice"
          />
        </View>
        <View
          style={{
            height: 50,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="Search for Quests..."
            placeholderTextColor="#042944"
          />
        </View>

        <Text
          style={{
            color: "#042944",
            paddingLeft: 10,
            margin: 6,
            fontWeight: "bold",
          }}
        >
          Quests Nearby!
        </Text>
        <View style={{ height: 230, overflow: "hidden" }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 80 }}
            ref={questListRef}
            renderItem={({ item }) => (
              <Pressable onPress={() => onQuestPress(item)}>
                <View
                  style={
                    item.id === selectedQuest?.id
                      ? styles.listSelected
                      : styles.list
                  }
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <FontAwesome
                      name={item.iconName}
                      color={
                        item.id === selectedQuest?.id ? "#f2e8b7" : "#042944"
                      }
                      size={14}
                    />
                    <View>
                      <Text
                        style={
                          item.id === selectedQuest?.id
                            ? {
                                color: "#f2e8b7",
                                fontWeight: "bold",
                                fontSize: 16,
                              }
                            : {
                                color: "#042944",
                                fontWeight: "bold",
                                fontSize: 16,
                              }
                        }
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={
                          item.id === selectedQuest?.id
                            ? { color: "#f2e8b7", fontSize: 12 }
                            : { color: "#042944", fontSize: 12 }
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
                </View>
              </Pressable>
            )}
          />
        </View>

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
            <Text style={{ color: "#ee906f", fontWeight: "bold" }}>
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
            <Text style={{ color: "#042944" }}>Unselect</Text>
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
            <Text style={{ color: "#042944", fontWeight: "bold" }}>
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
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f2efe8",
    paddingHorizontal: 40,
    paddingVertical: 55,
    flex: 1,
    boxSizing: "border-box",
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "#ee906f",
    borderWidth: 1,
  },
  svgBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 0,
    margin: 0,
    padding: 2,
  },
  input: {
    padding: 8,
    height: 40,
    width: "100%",
    backgroundColor: "#e8e3d9",
    borderWidth: 2,
    borderColor: "#042944",
    borderRadius: 3,
  },
  list: {
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
    backgroundColor: "#ee906f",
    borderBottomWidth: 5,
    borderColor: "#042944",
    borderRadius: 3,
  },
  listSelected: {
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
    backgroundColor: "#ff8b61ff",
    borderBottomWidth: 5,
    borderTopWidth: 1,
    borderColor: "#042944",
    borderRadius: 3,
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
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  postButton: {
    flexShrink: 1,
    padding: 10,
    backgroundColor: "#f2efe8",
    borderWidth: 4,
    borderColor: "#ee906f",
    borderRadius: 5,
  },
  postButtonSelected: {
    display: "none",
  },
  goToQuestbutton: {
    display: "none",
  },
  goToQuestbuttonSelected: {
    flexShrink: 1,
    padding: 10,
    backgroundColor: "#ee906f",
    borderWidth: 4,
    borderColor: "#042944",
    borderRadius: 5,
  },
  unselectbutton: {
    display: "none",
  },
  unselectbuttonSelected: {
    flexShrink: 1,
    padding: 10,
    backgroundColor: "#f2efe8",
    borderWidth: 4,
    borderColor: "#042944",
    borderRadius: 5,
  },
});

export default QuestListComponent;
