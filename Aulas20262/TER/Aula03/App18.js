import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Estilos from './Estilos'

const Pilha = createStackNavigator()

const Home = () => {
  return(
    <View style={ Estilos.principal }>
      <Text>Seja Bem-Vindo(a)!</Text>
    </View>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen name='Home' component={ Home } />
      </Pilha.Navigator>
    </NavigationContainer>
  )
}

export default App