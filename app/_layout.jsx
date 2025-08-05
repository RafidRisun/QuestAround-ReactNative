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
        }}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: "#96c294",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            height: 45,
            width: 45,
          }}
        >
          <FontAwesome name="bars" size={20} color="white" />
        </View>
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
      </Stack>
    </View>
  );
}
