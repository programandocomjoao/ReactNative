import React from 'react'
import { Text, View } from 'react-native'
import Estilos from './components/Estilos04'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Home = () => {
  return(
    <View style={ Estilos.principal }>
      <Text>Seja Bem-Vindo(a)!</Text>
    </View>
  )
}

const Pilha = createStackNavigator()

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