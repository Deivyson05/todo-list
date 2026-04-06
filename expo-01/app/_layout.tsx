import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import "../global.css";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" backgroundColor="#E6F4FE" />
      <Stack>
        <Stack.Screen name="index" options={{ title: "Reminder" }} />
        <Stack.Screen name="about" options={{ title: "--- Sobre ---" }} />
        <Stack.Screen name="tarefas/index" options={{ title: "Concluídas" }} />
      </Stack>
    </QueryClientProvider>
  );
}
