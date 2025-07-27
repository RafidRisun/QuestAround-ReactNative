import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const QuestListComponent = ({ selectedQuestID, setSelectedQuest }) => {
  const questListRef = useRef(null);

  const onQuestPress = (quest) => {
    setSelectedQuest(quest.id);
    if (questListRef.current) {
      questListRef.current.scrollToIndex({
        index: data.findIndex((q) => q.id === quest.id),
        animated: true,
      });
    }
  };

  useEffect(() => {
    if (selectedQuestID && questListRef.current) {
      const index = data.findIndex((q) => q.id === selectedQuestID);
      if (index !== -1) {
        questListRef.current.scrollToIndex({ index, animated: true });
      }
    }
  }, [selectedQuestID]);

  if (!data || data.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No quests available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#96c294", "#506150ff"]}
        style={styles.gradient}
      />
      <TextInput
        style={styles.input}
        placeholder="Search for Quests..."
        placeholderTextColor="#475C46"
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 60 }}
        ref={questListRef}
        renderItem={({ item }) => (
          <Pressable
            style={
              item.id === selectedQuestID ? styles.listSelected : styles.list
            }
            onPress={() => onQuestPress(item)}
          >
            <FontAwesome
              name={item.iconName}
              color={item.id === selectedQuestID ? "#506150ff" : "white"}
              size={14}
            />
            <View>
              <Text
                style={
                  item.id === selectedQuestID
                    ? { color: "#506150ff", fontWeight: "bold" }
                    : { color: "white", fontWeight: "bold" }
                }
              >
                {item.description}
              </Text>
              <Text
                style={
                  item.id === selectedQuestID
                    ? { color: "#506150ff", fontSize: 10 }
                    : { color: "white", fontSize: 10 }
                }
              >
                Reward: {item.reward}
              </Text>
            </View>
          </Pressable>
        )}
      />
      <View
        style={selectedQuestID ? styles.bottomBarSelected : styles.bottomBar}
      >
        <Pressable style={styles.postButton}>
          <Text style={{ color: "white" }}>Post a Quest!</Text>
        </Pressable>
        <Pressable
          style={
            selectedQuestID
              ? styles.goToQuestbuttonSelected
              : styles.goToQuestbutton
          }
        >
          <Text style={{ color: "white" }}>Go to Quest!</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    padding: 20,
    paddingTop: 35,
    height: "40%",
    boxSizing: "border-box",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
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
    marginBottom: 10,
    height: 40,
    width: "100%",
  },
  list: {
    padding: 10,
    paddingLeft: 20,
    borderRadius: 15,
    marginVertical: 4,
    backgroundColor: "#84aa82ff",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  listSelected: {
    padding: 10,
    paddingLeft: 20,
    borderRadius: 15,
    marginVertical: 4,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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
    backgroundColor: "#5B765B",
    padding: 15,
    borderRadius: 15,
  },
  goToQuestbutton: {
    backgroundColor: "#E84476",
    padding: 15,
    borderRadius: 15,
    display: "none",
  },
  goToQuestbuttonSelected: {
    backgroundColor: "#E84476",
    padding: 15,
    borderRadius: 15,
  },
});

export default QuestListComponent;

const data = [
  {
    id: 1,
    title: "Quest 1",
    description: "Help me clean up the park!",
    reward: "100 Taka",
    location: [23.749907, 90.41976],
    iconName: "leaf", // cleaning, environment
  },
  {
    id: 2,
    title: "Quest 2",
    description: "Help me with my homework!",
    reward: "200 Taka",
    location: [23.749023, 90.422419],
    iconName: "book", // homework
  },
  {
    id: 3,
    title: "Quest 3",
    description: "Help me find my lost dog!",
    reward: "50 Taka",
    location: [23.75, 90.42],
    iconName: "paw", // dog
  },
  {
    id: 4,
    title: "Quest 4",
    description: "Help me with my shopping!",
    reward: "100 Taka",
    location: [23.748, 90.421],
    iconName: "shopping-cart", // shopping
  },
  {
    id: 5,
    title: "Quest 5",
    description: "Help me with my garden!",
    reward: "150 Taka",
    location: [23.747, 90.42],
    iconName: "seedling", // garden
  },
  {
    id: 6,
    title: "Quest 6",
    description: "Help me with my cooking!",
    reward: "80 Taka",
    location: [23.746, 90.419],
    iconName: "kitchen-set", // cooking
  },
];
