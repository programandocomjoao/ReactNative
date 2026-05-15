import React from 'react'
import { View, Text, TouchableOpacity, Image, Button } from 'react-native'
import Estilos from './Estilos06'

const Home = ({ navigation }) => {
  return(
    <View style={ Estilos.principal }>
      <Text style={ Estilos.titulo }>Mundo dos Games</Text>

      <Text style={ Estilos.paragrafo }>Videogame é um tipo de jogo no qual o jogador interage através de periféricos conectados ao aparelho, como controles (joysticks) e/ou teclado com imagens enviadas a uma televisão ou um monitor, ou seja, aquele que usa tecnologia de computador. O termo inglês video game, ganhou a forma aglutinada no Brasil (como videogame), tanto para se referir a videojogos, como para se referir aos consoles onde os jogos se processam.</Text>

      <TouchableOpacity onPress={ () => navigation.navigate('Nintendo') }>
        <Image
          source={ require('../assets/logoNintendo.png') }
          style={{ width: 86, height: 25 }}  
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => navigation.navigate('Sega') }>
        <Image
          source={ require('../assets/logoSega.png') }
          style={{ width: 86, height: 25 }}  
        />
      </TouchableOpacity>

      <Button 
        title="Consoles"
        onPress={ () => navigation.navigate('Consoles') }
      />
    </View>
  )
}

export default Home