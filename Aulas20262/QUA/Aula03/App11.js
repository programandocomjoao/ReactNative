import React from 'react'
import { View, Text, Button } from 'react-native'
import Estilos from './Estilos'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Pilha = createStackNavigator()

const Home = ({ navigation }) => {
  return(
    <View style={ Estilos.principal }>
      <Text style={ Estilos.titulo }>Mundo dos Games</Text>
      <Text style={ Estilos.paragrafo }>Jogo eletrônico (português brasileiro) ou videojogo (português europeu), também chamado pelo anglicismo videogame, é um tipo de jogo no qual o jogador interage através de periféricos conectados ao aparelho, como controles (joysticks) e/ou teclado com imagens enviadas a uma televisão ou um monitor, ou seja, aquele que usa tecnologia de computador. O termo inglês video game, ganhou a forma aglutinada no Brasil (como videogame), tanto para se referir a videojogos, como para se referir aos consoles onde os jogos se processam.</Text>

      <Button
        title='Games Clássicos'
        onPress={() => navigation.navigate('Games Clássicos')}
      />
    </View>
  )
}

const Game = () => {
  return(
    <View style={ Estilos.principal }>
      <Text style={ Estilos.titulo }>Games Clássicos</Text>
      <Text style={ Estilos.paragrafo }>Super Mario Bros é um jogo eletrônico de plataforma desenvolvido pela Nintendo Research & Development 4 e publicado pela Nintendo para o Famicom em 1985 no Japão e para o Nintendo Entertainment System (NES) em 1985 e 1987 na América do Norte e Europa, respectivamente. É o sucessor do jogo de arcade Mario Bros., de 1983.</Text>
      <Text style={ Estilos.paragrafo }>Sonic the Hedgehog é uma franquia de jogos eletrônicos de plataforma criada por Yuji Naka e Naoto Oshima da equipe Sonic Team, da Sega, sendo atualmente administrada por Takashi Iizuka. O primeiro jogo da série Sonic, lançado em 1991, foi concebido pela divisão da Sega, Sonic Team após um pedido para um novo mascote.</Text>
    </View>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <Pilha.Navigator initialRouteName='Home'>
        <Pilha.Screen name="Home" component={ Home } />
        <Pilha.Screen name="Games Clássicos" component={ Game } />
      </Pilha.Navigator>
    </NavigationContainer>
  )
}

export default App