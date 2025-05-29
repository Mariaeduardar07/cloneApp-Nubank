import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Card({ title, children, image }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.card}>
        {image && (
          <Image
            source={image}
            style={styles.image}
            resizeMode="contain"
          />
        )}
        {children}
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    marginLeft: 8,
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
    justifyContent: 'flex-start', // alterado para subir o conteúdo
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
});