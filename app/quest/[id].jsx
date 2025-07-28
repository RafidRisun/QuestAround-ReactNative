import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function QuestDetails() {
  const { id, data } = useLocalSearchParams();
  const quest = data ? JSON.parse(data) : null;

  return (
    <View>
      <Text>ID: {id}</Text>
      {quest && <Text>Reward: {quest.reward}</Text>}
    </View>
  );
}
