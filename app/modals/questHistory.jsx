import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import TallBackSVG from "../../assets/svg/tallBack2.svg";

const QuestHistory = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const quest = data.find((item) => item.id === Number(id));

  if (!quest) {
    return (
      <View>
        <Text>Quest not found</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        shadowColor: "#0000003a", // pure black for a dark shadow
        shadowOffset: { width: 0, height: 0 }, // higher height for longer shadow
        shadowOpacity: 1, // higher opacity for darkness
        shadowRadius: 70, // higher radius for more blur/spread
        elevation: 24, // for Android shadow
      }}
    >
      <Pressable style={{ flex: 1 }} onPress={() => router.back()} />
      <View
        style={{
          width: "100%",
          height: "50%",
          backgroundColor: "#f2efe8",
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#ee906f",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "100%",
            padding: 2,
          }}
        >
          <TallBackSVG
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMin meet"
            style={{}}
          />
        </View>
        <View
          style={{
            height: "auto",
            paddingHorizontal: 50,
            paddingTop: 75,
            paddingBottom: 15,
            gap: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ color: "#042944", fontSize: 20, fontWeight: "bold" }}
            >
              {quest.title}
            </Text>
            <FontAwesome name={quest.iconName} color="#042944" size={20} />
          </View>
          <Text style={{ color: "#042944", fontSize: 12, fontWeight: "bold" }}>
            Reward: {quest.reward}
          </Text>
          <Text
            style={{
              color: "#042944",
              fontSize: 14,
              textAlign: "justify",
            }}
          >
            {quest.description}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ color: "#042944", fontWeight: "bold" }}>
                Posted On:{" "}
              </Text>
              <Text style={{ color: "#042944" }}>{quest.postedOn.date}</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ color: "#042944", fontWeight: "bold" }}>
                Ends On:{" "}
              </Text>
              <Text style={{ color: "#042944" }}>{quest.endDate}</Text>
            </View>
          </View>
          <View style={styles.userCard}>
            <Image
              style={styles.image}
              source={require("../../assets/images/image.png")}
              //placeholder={}
              contentFit="cover"
              transition={1000}
            />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#f2efe8",
                  fontSize: 12,
                }}
              >
                Quest Posted by:
              </Text>
              <Text style={{ fontWeight: "bold", color: "#f2efe8" }}>
                {quest.username}
              </Text>
              <Text style={{ color: "#f2efe8" }}>{quest.address}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomBar}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={{ color: "#042944" }}>Return</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default QuestHistory;

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 60,
    marginTop: 15,
  },
  backButton: {
    flexShrink: 1,
    padding: 10,
    backgroundColor: "#f2efe8",
    borderWidth: 4,
    borderColor: "#042944",
    borderRadius: 5,
  },
  acceptButton: {
    flexShrink: 1,
    padding: 10,
    backgroundColor: "#ee906f",
    borderWidth: 4,
    borderColor: "#042944",
    borderRadius: 5,
  },
  userCard: {
    flexDirection: "row",
    backgroundColor: "#042944",
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#f2efe8",
    backgroundColor: "#f2efe8",
  },
  commentCard: {
    backgroundColor: "#042944",
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 10,
    //flex: 1, // <-- allow FlatList to expand and scroll
    paddingBottom: 0,
    minHeight: 100,
  },
  input: {
    backgroundColor: "#84aa82ff",
    color: "#042944",
    padding: 8,
    paddingLeft: 20,
    borderColor: "#475C46",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 0,
    height: 40,
    width: "100%",
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
    iconColor: "#3D74B6",
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
      { username: "mathWhiz", text: "I can help after school." },
    ],
    status: "Available",
    type: "event",
    femaleOnly: false,
  },
  {
    id: 2,
    title: "Help me with my homework!",
    description:
      "Need someone patient to help explain some tough math and science concepts this week. Ideal for a college student or tutor who loves teaching kids.",
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
    comments: [{ username: "mathWhiz", text: "I can help after school." }],
    status: "Available",
    type: "quest",
    femaleOnly: false,
  },
  {
    id: 3,
    title: "Help me find my lost dog!",
    description:
      "My small brown dog went missing near the lake yesterday evening. Please help look around the neighborhood or share any sightings. Reward guaranteed!",
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
    comments: [{ username: "petFriend", text: "I'll keep an eye out!" }],
    status: "Available",
    type: "event",
    femaleOnly: false,
  },
  {
    id: 4,
    title: "Help me with my shopping!",
    description:
      "Need a hand carrying groceries from the market this Friday evening. It’s a short walk, but the bags get pretty heavy. Friendly help appreciated!",
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
    comments: [{ username: "strongArms", text: "I can help after work." }],
    status: "Available",
    type: "quest",
    femaleOnly: true,
  },
  {
    id: 5,
    title: "Help me with my garden!",
    description:
      "Looking for someone to help replant flowers and trim bushes this weekend. Great chance to enjoy fresh air and help beautify my small home garden.",
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
    comments: [{ username: "plantLover", text: "I love gardening!" }],
    status: "Available",
    type: "quest",
    femaleOnly: false,
  },
  {
    id: 6,
    title: "Help me with my cooking!",
    description:
      "Need an extra pair of hands to help prepare ingredients for a family gathering this Saturday. Chopping, mixing, and maybe some taste testing too!",
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
    comments: [{ username: "foodie", text: "Count me in for taste testing!" }],
    status: "Available",
    type: "quest",
    femaleOnly: true,
  },
  {
    id: 7,
    title: "Help me with my event!",
    description:
      "Looking for volunteers to help organize a community event this weekend. Tasks include setting up, managing activities, and cleaning up afterward.",
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
      { username: "volunteer1", text: "Count me in for helping out!" },
    ],
    status: "Available",
    type: "event",
    femaleOnly: false,
  },
  {
    id: 8,
    title: "Help me paint my house!",
    description:
      "Looking for someone to help paint the walls of my living room this weekend. Paint and brushes will be provided. Great opportunity for creative minds!",
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
    comments: [{ username: "artLover", text: "I can help with designs!" }],
    status: "Available",
    type: "quest",
    femaleOnly: false,
  },
  {
    id: 9,
    title: "Help me fix my garden fence!",
    description:
      "My garden fence is broken and needs fixing. Looking for someone handy with tools to help repair it this Friday afternoon.",
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
    comments: [{ username: "toolExpert", text: "I can bring my toolkit!" }],
    status: "Available",
    type: "event",
    femaleOnly: false,
  },
  {
    id: 10,
    title: "Help me organize my books!",
    description:
      "I have a large collection of books that need organizing by genre and author. Looking for someone who loves books and has an eye for detail.",
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
    comments: [{ username: "libraryFan", text: "I love organizing books!" }],
    status: "Available",
    type: "quest",
    femaleOnly: false,
  },
];
