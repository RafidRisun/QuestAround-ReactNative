import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

const data = [
  {
    id: 1,
    title: "Quest 1",
    description: "Help me clean up the park!",
    reward: "100 Taka",
    location: [23.749907, 90.41976],
  },
  {
    id: 2,
    title: "Quest 2",
    description: "Help me with my homework!",
    reward: "200 Taka",
    location: [23.749023, 90.422419],
  },
  {
    id: 3,
    title: "Quest 3",
    description: "Help me find my lost dog!",
    reward: "50 Taka",
    location: [23.75, 90.42],
  },
  {
    id: 4,
    title: "Quest 4",
    description: "Help me with my shopping!",
    reward: "100 Taka",
    location: [23.748, 90.421],
  },
  {
    id: 5,
    title: "Quest 5",
    description: "Help me with my garden!",
    reward: "150 Taka",
    location: [23.747, 90.42],
  },
  {
    id: 6,
    title: "Quest 6",
    description: "Help me with my cooking!",
    reward: "80 Taka",
    location: [23.746, 90.419],
  },
];

const QuestListComponent = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for Quests..."
        placeholderTextColor="#514346"
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.list}>
            {/* <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              {item.title}
            </Text> */}
            <Text>{item.description}</Text>
            <Text style={{ fontSize: 10, color: "grey" }}>
              Reward: {item.reward}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
  input: {
    padding: 8,
    paddingLeft: 20,
    borderWidth: 0.5,
    borderBlockColor: "#847376",
    borderRadius: 50,
    marginBottom: 10,
    height: 40,
    width: "100%",
  },
  list: {
    padding: 8,
    paddingLeft: 20,
    borderLeftWidth: 0.25,
    //borderRightWidth: 0.25,
    //borderWidth: 0.25,
    borderColor: "#847376",
    borderRadius: 50,
    marginVertical: 4,
  },
});

export default QuestListComponent;
