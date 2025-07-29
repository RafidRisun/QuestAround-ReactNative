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
    address: "222/1-C, Malibagh, Dhaka",
    phoneNumber: "+8801712345678",
    gender: "Female",
    age: 25,
    postedOn: { date: "2025-07-29", time: "10:00 AM" },
    endDate: "2025-08-01",
    comments: [
      { username: "helper1", text: "Excited to join!" },
      { username: "natureFan", text: "Will bring gloves and bags." },
      { username: "mathWhiz", text: "I can help after school." },
      { username: "mathWhiz", text: "I can help after school." },
      { username: "mathWhiz", text: "I can help after school." },
    ],
    status: "Available",
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
    postedOn: { date: "2025-07-28", time: "6:30 PM" },
    endDate: "2025-08-03",
    comments: [{ username: "mathWhiz", text: "I can help after school." }],
    status: "Available",
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
    postedOn: { date: "2025-07-27", time: "8:00 PM" },
    endDate: "2025-08-02",
    comments: [{ username: "petFriend", text: "I'll keep an eye out!" }],
    status: "Available",
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
    postedOn: { date: "2025-07-29", time: "2:00 PM" },
    endDate: "2025-08-01",
    comments: [{ username: "strongArms", text: "I can help after work." }],
    status: "Available",
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
    postedOn: { date: "2025-07-30", time: "9:00 AM" },
    endDate: "2025-08-04",
    comments: [{ username: "plantLover", text: "I love gardening!" }],
    status: "Available",
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
    postedOn: { date: "2025-07-30", time: "11:30 AM" },
    endDate: "2025-08-02",
    comments: [{ username: "foodie", text: "Count me in for taste testing!" }],
    status: "Available",
  },
];
