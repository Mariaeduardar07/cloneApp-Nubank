import { View, Text, StyleSheet } from 'react-native'
import AccountBalance from '../components/accountbalance/Accountbalance.js';
import ActionButton from '../components/actionButton/ActionButton.js';
import Card from '../components/card/Card.js'
import giftCardImg from '../assets/gift-card.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <ActionButton />
        <AccountBalance />
      <Text style={styles.title}>Olá, Usuário</Text>
      <Text style={styles.subtitle}>Bem-vindo ao seu app Nubank clone</Text>
      <Card/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#820ad1', // Roxo Nubank
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  },
})

 