import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="quest/[id]"
        options={{ presentation: "transparentModal" }}
      />
      <Stack.Screen
        name="createQuest"
        options={{ presentation: "transparentModal" }}
      />
    </Stack>
  );
}
