import React from 'react'
import Home from './components/Home'
import Midias from './components/Midias'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Pilha = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="Home">
        <Pilha.Screen name="Home" component={ Home } />
        <Pilha.Screen name="Mídias Sociais" component={ Midias } />
      </Pilha.Navigator>
    </NavigationContainer>
  )
}

export default App
