import { View, Text, StyleSheet } from 'react-native'

export default function AccountBalance({ showBalance }) {
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
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingLeft: 24,
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