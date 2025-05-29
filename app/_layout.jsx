import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    // Não precisa de fragmento se só há um elemento no return
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Nubank Clone",
          headerStyle: {
            backgroundColor: "#820ad1", // Roxo Nubank
          },
          headerTintColor: "#fff", // Cor do texto do cabeçalho
          headerTitleStyle: {
            fontWeight: "bold", // Negrito no título do cabeçalho
          },
        }}
      />

      <StatusBar style="light" backgroundColor="#820ad1" />
    </Stack>
  );
}
