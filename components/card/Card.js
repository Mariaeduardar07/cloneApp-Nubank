import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function Card({ title, children, image }) {
  return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Compre sem sair do app</Text>
      <View style={styles.card}>
        <Image
            source={require('../../assets/gift-card.png')} // Ensure the path is correct
            style={styles.image}
            resizeMode="contain"
          />
        <View style={styles.textWrapper}>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
    alignSelf: 'center',
    marginVertical: 16,
    height: 170, 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: "150%",
    height: 180,
    top: -20,
    marginBottom: 0,
    marginTop: 0,
    alignSelf: 'center',
    borderRadius: 15,
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
});