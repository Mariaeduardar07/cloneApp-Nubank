import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons' 

export default function AccountBalance() {
  const [showBalance, setShowBalance] = useState(true)

  const balance = 55473.28 

  function formatCurrency(value) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saldo disponível</Text>

      <View style={styles.row}>
        <Text style={styles.amount}>
          {showBalance ? formatCurrency(balance) : '••••••'}
        </Text>

        <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
          <Ionicons
            name={showBalance ? 'eye' : 'eye-off'}
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  marginTop: 30,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
})
