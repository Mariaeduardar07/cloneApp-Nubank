import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';

const HeaderCard = ({ showBalance, setShowBalance }) => {
  return (
    <View style={styles.container}>
      {/* Parte esquerda - ícone e texto */}
      <View style={styles.leftSection}>
        <View style={styles.profileCircle}>
          <Icon name="person" size={24} color="#fff" />
        </View>
        <Text style={styles.greeting}>Olá, Usuário</Text>
      </View>

      {/* Parte direita - ícones */}
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.icon} onPress={() => setShowBalance(!showBalance)}>
          <Icon name={showBalance ? "visibility" : "visibility-off"} size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon name="help-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="envelope" size={20} color="#fff" />
          <View style={styles.plusIcon}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8A05BE',
    padding: 16,
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20,
    flex: 1,
  },
  profileCircle: {
    backgroundColor: '#BA4DE3',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 30,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 25,
    marginRight: 5,
    marginBottom: 50,
  },
  icon: {
    position: 'relative',
  },
  plusIcon: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#fff',
    width: 12,
    height: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    fontSize: 10,
    color: '#8000FF',
    fontWeight: 'bold',
  },
});

export default HeaderCard;