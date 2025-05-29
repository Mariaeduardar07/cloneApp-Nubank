import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import { useRef, useState } from 'react'
import { useRouter } from 'expo-router';

const CARD_WIDTH = 180
const CARD_MARGIN = 16
const SCROLL_STEP = CARD_WIDTH + CARD_MARGIN

export default function Carrosel() {
  const scrollRef = useRef(null)
  const [scrollX, setScrollX] = useState(0)
  const router = useRouter();

  // Função para rolar para a direita
  const scrollRight = () => {
    const maxScroll = (SCROLL_STEP * 3) - (SCROLL_STEP * 2)
    const newX = Math.min(scrollX + SCROLL_STEP, maxScroll)
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: newX, animated: true })
      setScrollX(newX)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descubra mais</Text>
      <View style={styles.carouselRow}>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width: (CARD_WIDTH * 2) + (CARD_MARGIN * 3) }} // Mostra 2 cards
          contentContainerStyle={{ paddingRight: 0 }}
        >
          {/* Card 1 */}
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://www.em.com.br/emfoco/wp-content/uploads/2025/04/Nubank_1743524144920.jpg' }}
              style={styles.image}
            />
            <Text style={styles.cardTitle}>Indique o Nu para amigos</Text>
            <Text style={styles.cardSubtitle}>Espalhe como é simples estar no controle.</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push('/share')}
            >
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
          {/* Card 3 */}
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-0.png' }}
              style={styles.image}
            />
            <Text style={styles.cardTitle}>Cartão virtual</Text>
            <Text style={styles.cardSubtitle}>Mais segurança para suas compras online.</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ativar agora</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.arrowButton} onPress={scrollRight}>
          <Text style={styles.arrowText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
    padding: 20,
    marginTop: 18, 
  },
  carouselRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: '#232325',
    borderRadius: 12,
    width: CARD_WIDTH,
    marginLeft: CARD_MARGIN,
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
  arrowButton: {
    backgroundColor: '#820ad1',
    borderRadius: 20,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  arrowText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
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