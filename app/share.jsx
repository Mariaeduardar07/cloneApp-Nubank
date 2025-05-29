import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Share() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <View style={styles.illustration}>
        <View style={[styles.circle, { backgroundColor: '#820ad1', width: 120, height: 60, borderRadius: 60, position: 'absolute', top: 30, left: 0 }]} />
        <View style={[styles.circle, { backgroundColor: '#fff', width: 28, height: 28, borderRadius: 14, position: 'absolute', top: 10, left: 20 }]} />
        <View style={[styles.circle, { backgroundColor: '#fff', width: 20, height: 20, borderRadius: 10, position: 'absolute', top: 40, left: 90 }]} />
        <View style={[styles.circle, { backgroundColor: '#fff', width: 16, height: 16, borderRadius: 8, position: 'absolute', top: 20, left: 70 }]} />
        <View style={[styles.circle, { backgroundColor: '#820ad1', width: 40, height: 40, borderRadius: 20, position: 'absolute', top: 50, left: 40 }]} />
        <View style={[styles.circle, { backgroundColor: '#fff', width: 16, height: 16, borderRadius: 8, position: 'absolute', top: 60, left: 60 }]} />
        <View style={[styles.circle, { backgroundColor: '#FFD600', width: 20, height: 20, borderRadius: 10, position: 'absolute', top: 30, left: 100 }]} />
        <View style={[styles.circle, { backgroundColor: '#FFD600', width: 16, height: 16, borderRadius: 8, position: 'absolute', top: 60, left: 80 }]} />
        <View style={[styles.circle, { backgroundColor: '#820ad1', width: 50, height: 60, borderRadius: 25, position: 'absolute', top: 70, left: 60 }]} />
      </View>
      <Text style={styles.title}>
        <Text style={{ fontWeight: 'bold', color: '#a685fa' }}>Compartilhe coisas boas:</Text>{'\n'}
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>convide amigos e familiares para o Nubank</Text>
      </Text>

      <Text style={styles.subtitle}>
        Você já conhece as N possibilidades de ser um cliente Nubank
      </Text>

      <Text style={styles.description}>
        Sua recomendação pode transformar a rotina de seus amigos e familiares, dando a eles acesso a serviços simples e inovadores. Escolha como você quer enviar o convite.
      </Text>

      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonPrimaryText}>Convidar agora</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonSecondaryText}>Convidar filhos menores de 18 anos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e21',
    padding: 24,
    paddingTop: 90,
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 16,
    zIndex: 10,
  },
  illustration: {
    width: width,
    height: 130,
    alignSelf: 'center',
    marginBottom: 16,
    marginTop: 16,
    marginLeft:60,
  },
  circle: {},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    marginTop: 8,
  },
  subtitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 32,
  },
  buttonPrimary: {
    backgroundColor: '#820ad1',
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonPrimaryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonSecondary: {
    backgroundColor: '#29292e',
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: '#fff',
    fontSize: 15,
    opacity: 0.7,
  },
});