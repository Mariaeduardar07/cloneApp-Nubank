import { View, Text, StyleSheet } from "react-native";
import AccountBalance from "../components/accountbalance/Accountbalance.js";
import ActionButton from "../components/actionbutton/Actionbutton.js";
import Carrosel from "../components/carrosel/Carrosel.js";

export default function Home() {
  return (
    <View style={styles.container}>
      <ActionButton />
      <AccountBalance />
      <Carrosel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#820ad1',
    backgroundColor: "#1c1e21",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginTop: 8,
  },
});
