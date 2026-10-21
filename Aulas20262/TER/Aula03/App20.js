import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Estilos from './Estilos'
import Home from './components/Home'
import Nintendo from './components/Nintendo'
import Sega from './components/Sega'

const Pilha = createStackNavigator()

const Game = () => {
  return(
    <View style={ Estilos.principal }>
      <Text style={ Estilos.titulo }>Games Clássicos</Text>

      <Text style={ Estilos.paragrafo }>Super Mario Bros é um jogo eletrônico de plataforma desenvolvido pela Nintendo Research & Development 4 e publicado pela Nintendo para o Famicom em 1985 no Japão e para o Nintendo Entertainment System (NES) em 1985 e 1987 na América do Norte e Europa, respectivamente</Text>

      <Text style={ Estilos.paragrafo }>Sonic the Hedgehog é uma franquia de jogos eletrônicos de plataforma criada por Yuji Naka e Naoto Oshima da equipe Sonic Team, da Sega, sendo atualmente administrada por Takashi Iizuka. O primeiro jogo da série Sonic, lançado em 1991, foi concebido pela divisão da Sega, Sonic Team após um pedido para um novo mascote.</Text>
    </View>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <Pilha.Navigator initialRouteName='Home'>
        <Pilha.Screen name='Home' component={ Home } />
        <Pilha.Screen name='Nintendo' component={ Nintendo } />
        <Pilha.Screen name='Sega' component={ Sega } />
      </Pilha.Navigator>
    </NavigationContainer>
  )
}

export default App