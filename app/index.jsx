import { useState } from "react";
import { StyleSheet, View } from "react-native";
import MainMapComponent from "./components/MainMapComponent";
import QuestListComponent from "./components/QuestListComponent";

export default function Index() {
  const [selectedQuest, setSelectedQuest] = useState(null);

  return (
    <View style={styles.container}>
      <MainMapComponent
        selectedQuest={selectedQuest}
        setSelectedQuest={setSelectedQuest}
        data={data}
      />
      <QuestListComponent
        selectedQuest={selectedQuest}
        setSelectedQuest={setSelectedQuest}
        data={data}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const data = [
  {
    id: 1,
    title: "Help me clean up the park!",
    description:
      "We’re organizing a weekend park clean-up and need volunteers to help collect trash and make the park beautiful again. Let’s make our community greener together!",
    reward: "100 Taka",
    location: [23.749907, 90.41976],
    iconName: "leaf",
    username: "greenHero23",
    address: "Dhanmondi, Dhaka",
    phoneNumber: "+8801712345678",
    gender: "Female",
    age: 25,
  },
  {
    id: 2,
    title: "Help me with my homework!",
    description:
      "Need someone patient to help explain some tough math and science concepts this week. Ideal for a college student or tutor who loves teaching kids.",
    reward: "200 Taka",
    location: [23.749023, 90.422419],
    iconName: "book",
    username: "studyBuddy21",
    address: "Mohammadpur, Dhaka",
    phoneNumber: "+8801912345678",
    gender: "Male",
    age: 16,
  },
  {
    id: 3,
    title: "Help me find my lost dog!",
    description:
      "My small brown dog went missing near the lake yesterday evening. Please help look around the neighborhood or share any sightings. Reward guaranteed!",
    reward: "50 Taka",
    location: [23.75, 90.42],
    iconName: "paw",
    username: "dogLover99",
    address: "Gulshan, Dhaka",
    phoneNumber: "+8801712348888",
    gender: "Female",
    age: 28,
  },
  {
    id: 4,
    title: "Help me with my shopping!",
    description:
      "Need a hand carrying groceries from the market this Friday evening. It’s a short walk, but the bags get pretty heavy. Friendly help appreciated!",
    reward: "100 Taka",
    location: [23.748, 90.421],
    iconName: "shopping-cart",
    username: "shopHelper12",
    address: "Banani, Dhaka",
    phoneNumber: "+8801812345678",
    gender: "Male",
    age: 34,
  },
  {
    id: 5,
    title: "Help me with my garden!",
    description:
      "Looking for someone to help replant flowers and trim bushes this weekend. Great chance to enjoy fresh air and help beautify my small home garden.",
    reward: "150 Taka",
    location: [23.747, 90.42],
    iconName: "seedling",
    username: "gardenQueen",
    address: "Baridhara, Dhaka",
    phoneNumber: "+8801712555555",
    gender: "Female",
    age: 42,
  },
  {
    id: 6,
    title: "Help me with my cooking!",
    description:
      "Need an extra pair of hands to help prepare ingredients for a family gathering this Saturday. Chopping, mixing, and maybe some taste testing too!",
    reward: "80 Taka",
    location: [23.746, 90.419],
    iconName: "kitchen-set",
    username: "chefInTraining",
    address: "Mirpur, Dhaka",
    phoneNumber: "+8801612345678",
    gender: "Male",
    age: 30,
  },
];
