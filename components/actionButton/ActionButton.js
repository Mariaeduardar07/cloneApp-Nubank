import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const actions = [
  { id: 'pix', label: 'Área Pix', icon: 'qr-code' },
  { id: 'pay', label: 'Pagar', icon: 'barcode' },
  { id: 'transfer', label: 'Transferir', icon: 'arrow-up' },
  { id: 'deposit', label: 'Depositar', icon: 'cash' },
  { id: 'recharge', label: 'Recarga Celular', icon: 'phone-portrait' },
]

function ActionButton({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.actionButton} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.iconCircle}>
        <Ionicons name={icon} size={24} color="#820ad1" />
      </View>
      <Text style={styles.label} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  )
}

export default function QuickActions() {
  return (
    <View style={styles.container}>
      {actions.map(({ id, label, icon }) => (
        <ActionButton
          key={id}
          icon={icon}
          label={label}
          onPress={() => alert(label)}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 20,
  },
  actionButton: {
    alignItems: 'center',
    width: 63,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3a3c40',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    color: '#ffff',
    textAlign: 'center',
  },
})
