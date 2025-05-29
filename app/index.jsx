import React, { useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Card from '../components/card/Card.js'
import HeaderCard from "../components/header/Header.js"
import AccountBalance from "../components/accountbalance/Accountbalance.js"
import InfoCard from "../components/infocard/infocard.js"
import ActionButton from "../components/actionbutton/Actionbutton.js"
import Carrosel from "../components/carrosel/Carrosel.js"

export default function Home() {
  const [showBalance, setShowBalance] = useState(true)

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      <HeaderCard showBalance={showBalance} setShowBalance={setShowBalance} />
      <AccountBalance showBalance={showBalance} />
      <ActionButton />
      <InfoCard icon="lock-outline" label="Caixinhas" value="R$ 100,00" />
      <InfoCard icon="chart-bar" label="Meus Cartões" />
      <Card />
      <Carrosel />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1e21",
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
})