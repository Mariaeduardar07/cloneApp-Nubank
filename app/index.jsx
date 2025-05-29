import { View, Text, StyleSheet } from 'react-native'
import AccountBalance from '../components/accountbalance/Accountbalance.js';

export default function Home() {
  return (
    <View style={styles.container}>
        <AccountBalance />
      <Text style={styles.title}>Olá, Usuário</Text>
      <Text style={styles.subtitle}>Bem-vindo ao seu app Nubank clone</Text>

       
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

 