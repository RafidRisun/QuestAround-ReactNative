import { FontAwesome } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Pressable, View } from "react-native";

export default function RootLayout() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Pressable
        onPress={() => {
          router.navigate({
            pathname: "/modals/options",
          });
        }}
        style={{
          position: "absolute",
          top: 50,
          left: 20,
          zIndex: 1, // Ensure it stays above other elements
          padding: 10,
          backgroundColor: "#83c193",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          height: 45,
          width: 45,
        }}
      >
        <FontAwesome name="bars" size={20} color="white" />
      </Pressable>
      <Pressable
        onPress={() => {
          router.navigate({
            pathname: "/modals/notifications",
          });
        }}
        style={{
          position: "absolute",
          top: 50,
          right: 20,
          zIndex: 1, // Ensure it stays above other elements
          padding: 10,
          backgroundColor: "#83c193",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          height: 45,
          width: 45,
        }}
      >
        <FontAwesome name="bell" size={20} color="white" />
      </Pressable>

      {/* Stack Navigator */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="modals/questDetails"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="modals/createQuest"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="modals/options"
          options={{
            presentation: "transparentModal",
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            presentation: "modal",
          }}
        />
      </Stack>
    </View>
  );
}
