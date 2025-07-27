import { useState } from "react";
import { StyleSheet, View } from "react-native";
import MainMapComponent from "./components/MainMapComponent";
import QuestListComponent from "./components/QuestListComponent";

export default function Index() {
  const [selectedQuestID, setSelectedQuest] = useState(null);

  return (
    <View style={styles.container}>
      <MainMapComponent
        selectedQuestID={selectedQuestID}
        setSelectedQuest={setSelectedQuest}
      />
      <QuestListComponent
        selectedQuestID={selectedQuestID}
        setSelectedQuest={setSelectedQuest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
