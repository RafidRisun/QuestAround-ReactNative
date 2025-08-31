import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import MainMapComponent from "./components/MainMapComponent";
import QuestListComponent from "./components/QuestListComponent";

export default function Index() {
  const [selectedQuest, setSelectedQuest] = useState(null);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.mapContainer}>
        <MainMapComponent
          selectedQuest={selectedQuest}
          setSelectedQuest={setSelectedQuest}
          data={data}
        />
      </View>
      <View style={styles.questContainer}>
        <QuestListComponent
          selectedQuest={selectedQuest}
          setSelectedQuest={setSelectedQuest}
          data={data}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    height: "55%",
    boxSizingMode: "border-box",
  },
  questContainer: {
    height: "45%",
    //flex: 1,
    boxSizingMode: "border-box",
  },
});

// Example data array with updated categories
const data = [
  {
    id: 1,
    title: "Help me clean up the park!",
    description: "...",
    reward: "100 Taka",
    location: [23.749907, 90.41976],
    iconName: "leaf",
    iconColor: "#3D74B6",
    username: "greenHero23",
    address: "222/1-C, Malibagh, Dhaka",
    phoneNumber: "+8801712345678",
    gender: "Female",
    age: 25,
    postedOn: { date: "2025-07-29", time: "10:00 AM" },
    endDate: "2025-08-01",
    comments: [
      /* ... */
    ],
    status: "Available",
    type: "event",
    femaleOnly: false,
    category: "Social and Community",
  },
  {
    id: 2,
    title: "Help me with my homework!",
    description: "...",
    reward: "200 Taka",
    location: [23.749023, 90.422419],
    iconName: "book",
    iconColor: "#FFCB61",
    username: "studyBuddy21",
    address: "Mohammadpur, Dhaka",
    phoneNumber: "+8801912345678",
    gender: "Male",
    age: 16,
    postedOn: { date: "2025-07-28", time: "6:30 PM" },
    endDate: "2025-08-03",
    comments: [
      /* ... */
    ],
    status: "Available",
    type: "quest",
    femaleOnly: false,
    category: "Studies and Tutoring",
  },
  {
    id: 3,
    title: "Help me find my lost dog!",
    description: "...",
    reward: "50 Taka",
    location: [23.75, 90.42],
    iconName: "paw",
    iconColor: "#FF894F",
    username: "dogLover99",
    address: "Gulshan, Dhaka",
    phoneNumber: "+8801712348888",
    gender: "Female",
    age: 28,
    postedOn: { date: "2025-07-27", time: "8:00 PM" },
    endDate: "2025-08-02",
    comments: [
      /* ... */
    ],
    status: "Available",
    type: "event",
    femaleOnly: false,
    category: "Service Providing",
  },
  {
    id: 4,
    title: "Help me with my shopping!",
    description: "...",
    reward: "100 Taka",
    location: [23.748, 90.421],
    iconName: "shopping-cart",
    iconColor: "#EA5B6F",
    username: "shopHelper12",
    address: "Banani, Dhaka",
    phoneNumber: "+8801812345678",
    gender: "Male",
    age: 34,
    postedOn: { date: "2025-07-29", time: "2:00 PM" },
    endDate: "2025-08-01",
    comments: [
      /* ... */
    ],
    status: "Available",
    type: "quest",
    femaleOnly: true,
    category: "Shopping",
  },
  {
    id: 5,
    title: "Help me with my garden!",
    description: "...",
    reward: "150 Taka",
    location: [23.747, 90.42],
    iconName: "seedling",
    iconColor: "#4A9782",
    username: "gardenQueen",
    address: "Baridhara, Dhaka",
    phoneNumber: "+8801712555555",
    gender: "Female",
    age: 42,
    postedOn: { date: "2025-07-30", time: "9:00 AM" },
    endDate: "2025-08-04",
    comments: [
      /* ... */
    ],
    status: "Available",
    type: "quest",
    femaleOnly: false,
    category: "Household and Errands",
  },
  {
    id: 6,
    title: "Help me with my cooking!",
    description: "...",
    reward: "80 Taka",
    location: [23.746, 90.419],
    iconName: "kitchen-set",
    iconColor: "#3D74B6",
    username: "chefInTraining",
    address: "Mirpur, Dhaka",
    phoneNumber: "+8801612345678",
    gender: "Male",
    age: 30,
    postedOn: { date: "2025-07-30", time: "11:30 AM" },
    endDate: "2025-08-02",
    comments: [
      /* ... */
    ],
    status: "Available",
    type: "quest",
    femaleOnly: true,
    category: "Household and Errands",
  },
  {
    id: 7,
    title: "Help me with my event!",
    description: "...",
    reward: "100 Taka",
    location: [24.3746, 88.6004],
    iconName: "star",
    iconColor: "#FFCB61",
    username: "eventOrganizer",
    address: "Rajshahi, Bangladesh",
    phoneNumber: "+8801612345678",
    gender: "Male",
    age: 30,
    postedOn: { date: "2025-07-30", time: "11:30 AM" },
    endDate: "2025-08-02",
    comments: [
      /* ... */
    ],
    status: "Available",
    type: "event",
    femaleOnly: false,
    category: "Events",
  },
  {
    id: 8,
    title: "Help me paint my house!",
    description: "...",
    reward: "200 Taka",
    location: [23.7868, 90.4011],
    iconName: "paint-brush",
    iconColor: "#FF5733",
    username: "creativePainter",
    address: "House 12, Road 5, Dhanmondi, Dhaka",
    phoneNumber: "+8801712345678",
    gender: "Male",
    age: 35,
    postedOn: { date: "2025-08-01", time: "9:00 AM" },
    endDate: "2025-08-05",
    comments: [
      /* ... */
    ],
    status: "Available",
    type: "quest",
    femaleOnly: false,
    category: "Household and Errands",
  },
  {
    id: 9,
    title: "Help me fix my garden fence!",
    description: "...",
    reward: "150 Taka",
    location: [23.7875, 90.4026],
    iconName: "hammer",
    iconColor: "#4A90E2",
    username: "fixItPro",
    address: "House 15, Road 6, Dhanmondi, Dhaka",
    phoneNumber: "+8801812345678",
    gender: "Female",
    age: 28,
    postedOn: { date: "2025-08-02", time: "3:00 PM" },
    endDate: "2025-08-06",
    comments: [
      /* ... */
    ],
    status: "Available",
    type: "event",
    femaleOnly: false,
    category: "Household and Errands",
  },
  {
    id: 10,
    title: "Help me organize my books!",
    description: "...",
    reward: "100 Taka",
    location: [23.7883, 90.4014],
    iconName: "book",
    iconColor: "#FFC300",
    username: "bookLover",
    address: "House 10, Road 4, Dhanmondi, Dhaka",
    phoneNumber: "+8801912345678",
    gender: "Male",
    age: 22,
    postedOn: { date: "2025-08-01", time: "10:00 AM" },
    endDate: "2025-08-04",
    comments: [
      /* ... */
    ],
    status: "Available",
    type: "quest",
    femaleOnly: false,
    category: "Studies and Tutoring",
  },
];
