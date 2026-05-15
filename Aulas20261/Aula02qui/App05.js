import React from 'react'
import { View, Text, Button } from 'react-native'
import Estilos from './Estilos05'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Pilha = createStackNavigator()

const Home = ({ navigation }) => {
  return(
    <View style={ Estilos.principal }>
      <Text style={ Estilos.titulo }>Mundo dos Games</Text>

      <Text style={ Estilos.paragrafo }>Videogame é um tipo de jogo no qual o jogador interage através de periféricos conectados ao aparelho, como controles (joysticks) e/ou teclado com imagens enviadas a uma televisão ou um monitor, ou seja, aquele que usa tecnologia de computador. O termo inglês video game, ganhou a forma aglutinada no Brasil (como videogame), tanto para se referir a videojogos, como para se referir aos consoles onde os jogos se processam.</Text>

      <Button
        title="Games Clássicos"
        onPress={() => navigation.navigate('Games Clássicos')}
      />
    </View>
  )
}

const Game = () => {
  return(
    <View style={ Estilos.principal }>
      <Text style={ Estilos.titulo }>Games Clássicos</Text>

      <Text style={ Estilos.paragrafo }>Ninja Gaiden, ​​lançado no Japão como Ninja Ryūkenden e como Shadow Warriors na Europa, é um jogo de plataforma hack and slash de 1988 desenvolvido e publicado pela Tecmo para o Nintendo Entertainment System . Seu desenvolvimento e lançamento coincidiram com a versão arcade beat em up de mesmo nome. Foi lançado em dezembro de 1988 no Japão, em março de 1989 na América do Norte e em agosto de 1991 na Europa. Foi portado para diversas outras plataformas, incluindo PC Engine , Super NES e celulares.</Text>
    </View>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="Home">
        <Pilha.Screen name="Home" component={ Home } />
        <Pilha.Screen name="Games Clássicos" component={ Game } />
      </Pilha.Navigator>
    </NavigationContainer>
  )
}

export default App