import React from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './components/home'
import Midias from './components/midias'

const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="Mídias Sociais" component={ Midias } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App