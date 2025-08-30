import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TallBackSVG from "../assets/svg/tallBack2.svg";

const Profile = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
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
          flex: 1,
          paddingVertical: 50,
          paddingHorizontal: 50,
          boxSizing: "border-box",
        }}
      >
        <Text
          style={{
            color: "#042944",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Profile
        </Text>

        <Image
          source={userData.profilePicture}
          contentFit="cover"
          style={{
            width: 80,
            height: 80,
            borderRadius: 1000,
            alignSelf: "center",
            marginTop: 20,
            borderColor: "#042944",
            borderWidth: 3,
          }}
        />
        <Text
          style={{
            color: "#042944",
            textAlign: "center",
            marginTop: 10,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {userData.username}
        </Text>
        <View style={{ gap: 10 }}>
          {[
            { label: "Full Name:", value: userData.fullName },
            { label: "Email:", value: userData.email },
            { label: "Phone Number:", value: userData.phoneNumber },
            { label: "Address:", value: userData.address },
            { label: "Gender:", value: userData.gender },
            { label: "Age:", value: userData.age },
            { label: "Quests Done:", value: userData.questsDone },
          ].map((item, idx) => (
            <View
              key={idx}
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 6,
                // backgroundColor: "red", // Remove for production
              }}
            >
              <Text
                style={{
                  width: 120,
                  color: "#042944",
                  fontWeight: "normal",
                  fontSize: 15,
                }}
              >
                {item.label}
              </Text>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 5,
                  // Remove width: "100%" here
                }}
              >
                <Text
                  style={{
                    color: "#042944",
                    fontSize: 15,
                    fontWeight: "bold",
                    flexShrink: 1, // Add this line
                  }}
                  //numberOfLines={2} // Optional: limit to 2 lines, remove for unlimited
                  ellipsizeMode="tail" // Optional: show ... if text is too long
                >
                  {item.value}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <Pressable
          style={{
            backgroundColor: "#ee906f",
            padding: 10,
            borderBottomWidth: 5,
            borderColor: "#042944",
            borderRadius: 3,
            alignItems: "center",
            marginTop: 10,
          }}
          onPress={() => {}}
        >
          <Text style={{ color: "#042944", fontWeight: "bold", fontSize: 14 }}>
            Edit Profile
          </Text>
        </Pressable>
        <View style={{ marginTop: 20, gap: 10, flex: 1 }}>
          <Text style={{ color: "#042944", fontWeight: "bold", fontSize: 18 }}>
            Quests History
          </Text>
          <ScrollView>
            {participations.map((item) => (
              <Pressable
                key={item.id} // Move key here!
                onPress={() => {
                  router.navigate({
                    pathname: "/modals/questDetails",
                    params: {
                      id: key,
                    },
                  });
                }}
              >
                <View
                  style={{
                    borderRadius: 5,
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#042944",
                  }}
                >
                  <Text style={{ color: "#042944", fontSize: 15 }}>
                    {item.activity.name}
                  </Text>
                  <Text style={{ color: "#042944", fontSize: 12 }}>
                    Status: {item.status}
                  </Text>
                  <Text style={{ color: "#042944", fontSize: 12 }}>
                    Joined At: {item.joined_at.toLocaleString()}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <Pressable onPress={() => router.back()}>
          <Text style={{ color: "#506150ff" }}>Back to Quests</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default Profile;

const userData = {
  id: 1,
  username: "dr_gyatt",
  fullName: "Dr. Gyatt",
  email: "dr.gyatt@example.com",
  profilePicture: require("../assets/images/image.png"),
  phoneNumber: "+1234567890",
  address: "222/1-C, Malibagh, Dhaka, Bangladesh",
  gender: "Male",
  age: 30,
  questsDone: 5,
};

const participations = [
  {
    id: 1,
    activity: { id: 101, name: "Park Cleanup" },
    user: { id: 1, username: "dr_gyatt" },
    status: "joined",
    joined_at: new Date("2025-08-01T10:00:00Z"),
  },
  {
    id: 2,
    activity: { id: 102, name: "Math Tutoring" },
    user: { id: 1, username: "dr_gyatt" },
    status: "completed",
    joined_at: new Date("2025-08-03T15:30:00Z"),
  },
  {
    id: 3,
    activity: { id: 103, name: "Lost Dog Search" },
    user: { id: 1, username: "dr_gyatt" },
    status: "cancelled",
    joined_at: new Date("2025-08-05T09:15:00Z"),
  },
  {
    id: 4,
    activity: { id: 104, name: "Community Gardening" },
    user: { id: 1, username: "dr_gyatt" },
    status: "joined",
    joined_at: new Date("2025-08-07T13:45:00Z"),
  },
  {
    id: 5,
    activity: { id: 105, name: "Book Organization" },
    user: { id: 1, username: "dr_gyatt" },
    status: "completed",
    joined_at: new Date("2025-08-10T11:20:00Z"),
  },
];
