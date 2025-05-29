import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'

export default function Carrosel() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descubra mais</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.em.com.br/emfoco/wp-content/uploads/2025/04/Nubank_1743524144920.jpg' }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Indique o Nu para amigos</Text>
          <Text style={styles.cardSubtitle}>Espalhe como é simples estar no controle.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Indicar amigos</Text>
          </TouchableOpacity>
        </View>
        {/* Card 2 */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://exame.com/insight/_next/image?url=https%3A%2F%2Fclassic.exame.com%2Fwp-content%2Fuploads%2F2024%2F04%2Fnubank-mexico.jpg&w=1920&q=75' }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Portabilidade de salário</Text>
          <Text style={styles.cardSubtitle}>Liberdade é escolher onde receber seu dinheiro.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Conhecer</Text>
          </TouchableOpacity>
        </View>
       


      </ScrollView>
      <TouchableOpacity style={styles.rateContainer}>
        <Text style={styles.rateText}>💜 Avalie esta tela</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#232325',
    borderRadius: 12,
    width: 180,
    marginLeft: 16,
    padding: 16,
    alignItems: 'flex-start',
  },
  image: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#333',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    color: '#ccc',
    fontSize: 13,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#820ad1',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 18,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  rateContainer: {
    alignItems: 'center',
    marginTop: 18,
  },
  rateText: {
    color: '#a259e6',
    fontWeight: 'bold',
    fontSize: 15,
  },
})