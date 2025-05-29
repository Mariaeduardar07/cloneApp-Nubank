import { View, Text, StyleSheet } from 'react-native'

import Card from '../components/card/Card.js'
import giftCardImg from '../assets/gift-card.png';

import AccountBalance from '../components/accountbalance/Accountbalance.js';


export default function Home() {
  return (
    <View style={styles.container}>

      <View style={styles.textWrapper}>
        <Text style={styles.title}>Compre sem sair do app</Text>
      </View>
      <Card image={giftCardImg}>
      </Card>

        <AccountBalance />
      <Text style={styles.title}>Olá, Usuário</Text>
      <Text style={styles.subtitle}>Bem-vindo ao seu app Nubank clone</Text>

       

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002', // Roxo Nubank
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    marginBottom: 4,
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  },

})

})


