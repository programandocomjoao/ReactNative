import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './components/Home'
import Games from './components/Games'

const Pilha = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="Home">
        <Pilha.Screen name="Home" component={Home} />
        <Pilha.Screen name="Games" component={Games} />
      </Pilha.Navigator>
    </NavigationContainer>
  )
}

export default App