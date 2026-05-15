import React from 'react'
import { View, Text } from 'react-native'
import Estilos from './Estilos04'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Pilha = createStackNavigator()

const Home = () => {
  return(
    <View style={ Estilos.principal }>
      <Text>Seja Bem-vindo(a)!</Text>
    </View>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen name="Home" component={ Home } />
      </Pilha.Navigator>
    </NavigationContainer>
  )
}

export default App