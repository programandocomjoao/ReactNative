import React from 'react'
import { View, Text, Button } from 'react-native'
import Estilos from './Estilos06'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './components/Home'
import Nintendo from './components/Nintendo'
import Sega from './components/Sega'
import Consoles from './components/Consoles'

const Pilha = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="Home">
        <Pilha.Screen name="Home" component={ Home } />
        <Pilha.Screen name="Nintendo" component={ Nintendo } />
        <Pilha.Screen name="Sega" component={ Sega } />
        <Pilha.Screen name="Consoles" component={ Consoles } />
      </Pilha.Navigator>
    </NavigationContainer>
  )
}

export default App