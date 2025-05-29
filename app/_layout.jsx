import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function Layout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#820ad1" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  )
}
