import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Profile = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#83c193", "#4b6351"]}
        style={styles.gradient}
      />
      <Text
        style={{
          color: "white",
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
          width: 110,
          height: 110,
          borderRadius: 1000,
          alignSelf: "center",
          marginTop: 20,
          borderColor: "white",
          borderWidth: 5,
        }}
      />
      <Text
        style={{
          color: "white",
          textAlign: "center",
          marginTop: 10,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {userData.username}
      </Text>
      <View style={{ padding: 30, gap: 10 }}>
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
            }}
          >
            <Text
              style={{
                width: 120,
                color: "white",
                fontWeight: "normal",
                fontSize: 15,
              }}
            >
              {item.label}
            </Text>
            <View
              style={{
                flex: 1,
                width: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 5,
                padding: 5,
                flexWrap: "wrap",
              }}
            >
              <Text
                style={{
                  flex: 1,
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {item.value}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <Pressable onPress={() => router.back()}>
        <Text style={{ color: "#506150ff" }}>Back to Quests</Text>
      </Pressable>
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
