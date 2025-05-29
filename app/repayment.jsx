import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Repayment() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
          <Ionicons name="close" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Opções de pagamento</Text>

      <View style={styles.paymentOptions}>
        <TouchableOpacity style={styles.roundButton}>
          <MaterialCommunityIcons name="barcode" size={28} color="#fff" />
          <Text style={styles.optionText}>Boleto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roundButton}>
          <FontAwesome5 name="money-check-alt" size={28} color="#fff" />
          <Text style={styles.optionText}>Pix</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="ios-help-circle-outline" size={24} color="#fff" />
        <Text style={styles.menuText}>Assistente de Pagamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <MaterialCommunityIcons name="file-find-outline" size={24} color="#fff" />
        <Text style={styles.menuText}>Buscador de Contas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <MaterialCommunityIcons name="autorenew" size={24} color="#fff" />
        <Text style={styles.menuText}>Débito Automático</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <MaterialCommunityIcons name="car" size={24} color="#fff" />
        <Text style={styles.menuText}>Contas do Detran</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <MaterialCommunityIcons name="nfc" size={24} color="#fff" />
        <Text style={styles.menuText}>Pix por aproximação</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e21',
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0, 
  },
  backButton: {
    marginRight: 0,
    padding: 4,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 18,
    marginLeft: 4,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
    gap: 95, 
  },
  roundButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    width: 90,
    height: 90,
    borderRadius: 45,
    marginHorizontal: 0,
  },
  optionText: {
    color: '#fff',
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 12,
  },
});