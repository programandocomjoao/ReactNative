import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Estilos from '../Estilos'

const Home = ({ navigation }) => {
  return(
    <View style={ Estilos.principal }>
      <Text style={ Estilos.titulo }>Mundo dos Games</Text>
      <Text style={ Estilos.paragrafo }>Jogo eletrônico (português brasileiro) ou videojogo (português europeu), também chamado pelo anglicismo videogame, é um tipo de jogo no qual o jogador interage através de periféricos conectados ao aparelho, como controles (joysticks) e/ou teclado com imagens enviadas a uma televisão ou um monitor, ou seja, aquele que usa tecnologia de computador. O termo inglês video game, ganhou a forma aglutinada no Brasil (como videogame), tanto para se referir a videojogos, como para se referir aos consoles onde os jogos se processam.</Text>
    
      <TouchableOpacity
        onPress={ () => navigation.navigate('Nintendo') }
      >
        <Image
          source={ require('../assets/logoNintendo.png') }
          style={ Estilos.logo }
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () => navigation.navigate('Sega') }
      >
        <Image
          source={ require('../assets/logoSega.png') }
          style={ Estilos.logo }
        />
      </TouchableOpacity>
    </View>
  )
}

export default Home