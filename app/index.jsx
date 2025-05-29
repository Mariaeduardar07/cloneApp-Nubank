import { View, Text, StyleSheet } from "react-native";
import HeaderCard from "../components/header/Header.js";
import AccountBalance from "../components/accountbalance/Accountbalance.js";
import InfoCard from "../components/infocard/infocard.js";
import ActionButton from "../components/actionbutton/Actionbutton.js";

export default function Home() {
  return (
    <View style={styles.container}>
      <HeaderCard />
      <AccountBalance />
      <ActionButton />
      <InfoCard icon="lock-outline" label="Caixinhas" value="R$ 100,00" />
      <InfoCard icon="chart-bar" label="Meus Cartões" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#820ad1", // Roxo Nubank

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
